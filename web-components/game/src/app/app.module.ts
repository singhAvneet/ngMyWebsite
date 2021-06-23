import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';  
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule, DoBootstrap, Injector ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { GameComponent } from './game/g.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
    
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  bootstrap: [],
  entryComponents:[AppComponent,MatDialogModule]

})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector:this.injector });
    if (!customElements.get('game-wc')) {      
      customElements.define('game-wc' , element);
   }

    }

  ngDoBootstrap() {

  }
 }
