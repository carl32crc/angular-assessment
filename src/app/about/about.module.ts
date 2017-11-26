import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { APP_ROUTING } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
