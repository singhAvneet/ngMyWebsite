import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { AppRoutingModule ,routingComponents} from './app-routing.module';

import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
  constructor(private injector: Injector) {  }

  ngDoBootstrap() {
    const explore = createCustomElement(AppComponent, { injector:this.injector });
    customElements.define('explore-app' , explore);
  }
 }
