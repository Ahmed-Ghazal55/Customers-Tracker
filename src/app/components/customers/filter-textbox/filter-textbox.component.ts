import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  private'_filter': string;
  @Input() get filter() {
    return this._filter;
  }
  @Output() changed = new EventEmitter<string>();

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }



}
