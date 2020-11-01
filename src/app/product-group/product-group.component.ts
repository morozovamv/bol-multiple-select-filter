import { Component, OnInit } from '@angular/core';
import { array } from 'src/utils/array.utils';
import { GroupsService } from '../groups.service';
import {
  caseInsensitiveAlphabetOrd,
  Groups,
  isGroups,
  sortGroups,
} from './product-group.model';

const SELECTED_GROUP_STORAGE_KEY = 'selectedGroups';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css'],
})
export class ProductGroupComponent implements OnInit {
  rawGroups: Groups = [];
  selectedGroups: Groups = [];
  groupsToRender: Groups = [];

  searchInput: string = '';

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    this.groupsService.getGroups().subscribe((groups) => {
      const sortedGroups = groups.sort(caseInsensitiveAlphabetOrd);
      this.rawGroups = sortedGroups;

      const selectedGroupsRaw = sessionStorage.getItem(
        SELECTED_GROUP_STORAGE_KEY
      );

      if (selectedGroupsRaw !== null) {
        const selectedGroups = JSON.parse(selectedGroupsRaw);

        if (isGroups(selectedGroups)) {
          // if data is changed between sessions (before and after page reload)
          const filtered = selectedGroups.filter((group) =>
            sortedGroups.includes(group)
          );

          this.selectedGroups = filtered;

          this.groupsToRender = [
            ...filtered,
            ...sortedGroups.filter((group) => !filtered.includes(group)),
          ];
        } else {
          console.warn(
            new Error(
              `Session storage includes unsupported data. The selection of predefined checkboxes is canceled. Session storage is cleared by "${SELECTED_GROUP_STORAGE_KEY}" key now.`
            )
          );
          sessionStorage.removeItem(SELECTED_GROUP_STORAGE_KEY);
          this.groupsToRender = sortedGroups;
        }
      } else {
        this.groupsToRender = sortedGroups;
      }
    });
  }

  setSearchInputValue(value: string): void {
    this.searchInput = value;

    this.sortMatchesInUnselectedGroups(value);
  }

  toggleGroup(newGroup: string): void {
    const selectedGroups = this.selectedGroups;

    const updatedSelectedGroups = array
      .toggle(newGroup, selectedGroups)
      .sort(caseInsensitiveAlphabetOrd);

    sessionStorage.setItem(
      SELECTED_GROUP_STORAGE_KEY,
      JSON.stringify(updatedSelectedGroups)
    );
    this.selectedGroups = updatedSelectedGroups;

    this.groupsToRender = sortGroups(
      updatedSelectedGroups,
      this.groupsToRender
    );
  }

  sortMatchesInUnselectedGroups(search: string): void {
    const unselectedGroups = this.rawGroups.filter(
      (group) => !this.selectedGroups.includes(group)
    );

    this.groupsToRender = [
      ...this.selectedGroups,
      ...array.filterMatchesByString(search, unselectedGroups),
    ];
  }

  isGroupSelected(group: string): boolean {
    return this.selectedGroups.includes(group);
  }
}
