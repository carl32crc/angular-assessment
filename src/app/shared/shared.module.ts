import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ModalComponent
  ],
  declarations: [
    PaginationComponent,
    ModalComponent
  ]
})
export class SharedModule { }
