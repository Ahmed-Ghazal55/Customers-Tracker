import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';


import {  CapitalizePipe } from './shared/capitalize.pipe';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { FilterTextboxComponent } from './components/customers/filter-textbox/filter-textbox.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HeaderComponent,
    CustomersListComponent,
    FilterTextboxComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
