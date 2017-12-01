import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShellComponent } from './core/shell/shell.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpModule
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
