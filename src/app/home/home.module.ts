import { GnomeService } from './services/gnome.service';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home.component';
import { APP_ROUTING } from './home.routes';
import { ListComponent } from './list/list.component';
import { SquareComponent } from './square/square.component';
import { PropertiesComponent } from './list/properties/properties.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    APP_ROUTING
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    SquareComponent,
    PropertiesComponent
  ]
})
export class HomeModule { }
