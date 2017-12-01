import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gnome-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeHolder: string;
  @Input() textButton: string;
  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search(event) {
    this.onSearch.emit(event.target.value);
  }

}
