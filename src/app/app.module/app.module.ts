import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { Component } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent, 
    Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
