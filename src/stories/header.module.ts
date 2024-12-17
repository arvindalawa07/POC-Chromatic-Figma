import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { AppComponent } from '../app/app.component';

@NgModule({
  imports:      [ HeaderComponent ],
//   bootstrap:    [ AppComponent ],
//   declarations: [ AppComponent ],
})
export class HeaderModule { }