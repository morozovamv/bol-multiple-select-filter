import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() group: string = '';
  @Output() toggleGroupEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleGroup(group: string): void {
    this.toggleGroupEvent.emit(group);
  }
}
