import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { APP_ROUTING } from './home.routes';
import { ListComponent } from './list/list.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    SquareComponent
  ]
})
export class HomeModule { }
