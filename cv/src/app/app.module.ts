import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {FormsModule} from '@angular/forms';
import { appRoutiingModule ,routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AskComponent } from './shared/component/footer/ask.component';
import { HeaderComponent } from './header/header.component';


import{WebEmailService} from './shared/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AskComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CarouselamosModule,
    appRoutiingModule ,
    HttpClientModule
  ],
  providers: [ WebEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
