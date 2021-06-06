import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injector,DoBootstrap } from '@angular/core';
import  { createCustomElement } from '@angular/elements';


import { GameComponent } from './game/g.component';
import {AppComponent}from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],

  bootstrap: [AppComponent],
  entryComponents:[AppComponent],
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {  }

  ngDoBootstrap() {
    const explore = createCustomElement(AppComponent, { injector:this.injector });
    customElements.define('game-wc' , explore);
  }
 }
