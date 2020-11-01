import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Output() searchInputEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onValueChange(value: string): void {
    this.searchInputEvent.emit(value);
  }
}
