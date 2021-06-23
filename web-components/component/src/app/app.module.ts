import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { AppRoutingModule ,routingComponents} from './app-routing.module';

import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { GameComponent } from './tutorials/seo/game/game.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent],
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector:this.injector });
    if (customElements.get('explore-app')) {      
      customElements.define('explore-app' , element);
   }

    }

  ngDoBootstrap() {

  }
 }



