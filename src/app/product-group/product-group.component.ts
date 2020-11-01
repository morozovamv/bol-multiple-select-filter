import { Component, OnInit } from '@angular/core';
import { array } from 'src/utils/array.utils';
import { GroupsService } from '../groups.service';
import {
  caseInsensitiveAlphabetOrd,
  Groups,
  sortGroups,
} from './product-group.model';

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
      this.groupsToRender = sortedGroups;
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
}
