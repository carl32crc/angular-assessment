import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ROUTING } from './core.routes';

import { ShellComponent } from './shell/shell.component';
import { NavBarComponent } from './shell/nav-bar/nav-bar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [
    ShellComponent,
    NavBarComponent,
    FooterComponent,
    MainContentComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
