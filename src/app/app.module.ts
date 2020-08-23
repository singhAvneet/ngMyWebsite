import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { SlidesComponent } from './testimonial/slides/slides.component';
import { VoteComponent } from './testimonial/vote/vote.component';
// import { appRoutiingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TutorialsComponent,
    HeaderComponent,
    TestimonialComponent,
    ContactComponent,
    SlidesComponent,
    VoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2CarouselamosModule,
    // appRoutiingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
