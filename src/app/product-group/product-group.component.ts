import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';

type Groups = Array<string>;

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css'],
})
export class ProductGroupComponent implements OnInit {
  rawGroups: Groups = [];

  searchInput: string = '';

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    // TODO: sorting should ignore upper and lower cases
    this.groupsService.getGroups().subscribe((groups) => {
      this.rawGroups = groups.sort();
    });
  }

  setSearchInputValue(value: string) {
    this.searchInput = value;
  }
}
