import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { APP_ROUTING } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
