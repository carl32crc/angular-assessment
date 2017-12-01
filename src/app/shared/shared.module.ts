import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ModalComponent,
    SearchBarComponent,
    SpinnerComponent
  ],
  declarations: [
    PaginationComponent,
    ModalComponent,
    SearchBarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
