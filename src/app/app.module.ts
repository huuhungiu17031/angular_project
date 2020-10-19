import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomePageModule } from './layout/homePage/homePage.module';
import {OneWayBindingModule} from './one-way-binding/one-way-binding.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule,
    OneWayBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
