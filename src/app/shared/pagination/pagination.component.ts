import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'gnome-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageSize;
  @Input() items;
  @Output() action = new EventEmitter<any>();
  private startPage: number;
  private endPage: number;
  private startIndex: number;
  private endIndex: number;
  private pages: Array<number>;
  private currentPage: number;
  private itemsPaginated: Array<any>;

  constructor() { }

  ngOnInit() {
   this.setPage(1);
  }

  setPage(page: number) {

    if (page < 1 || page > this.getTotalPages(this.items.length, this.pageSize)) {
      return;
    }

    this.indexPage(page);
    this.itemsPaginated = this.items.slice(this.startIndex, this.endIndex + 1);
    this.action.emit(this.itemsPaginated);
  }

  getTotalPages(totalItems: number, pageSize: number) {
    return Math.round(totalItems / pageSize);
  }

  indexPage(currentPage: number = 1) {
    if (currentPage <= 6) {
      this.startPage = 1;
      this.endPage = 10;
    } else if (currentPage + 4 >= this.getTotalPages(this.items.length, this.pageSize)) {
      this.startPage = this.getTotalPages(this.items.length, this.pageSize) - 9;
      this.endPage = this.getTotalPages(this.items.length, this.pageSize);
    } else {
      this.startPage = currentPage - 5;
      this.endPage = currentPage + 4;
    }
    this.rangeStartToEnd(currentPage);
  }

  rangeStartToEnd(currentPage: number) {
    this.startIndex = (currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.items.length - 1);
    this.currentPage = currentPage;
    this.getPagesRange();
  }

  getPagesRange() {
    this.pages = Array.from(Array(this.endPage + 1 - this.startPage), (_ , i) => this.startPage + i );
  }
}
