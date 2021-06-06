import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";
const appRoutes:Routes=[
    {path:'',component:AboutComponent},
    {path:'about',component:AboutComponent},
    {path:'tutorials',component:TutorialsComponent},
    {path:'testimonial',component:TestimonialComponent},
    {path:'contact',component:ContactComponent}, 
    {path:'**',component:AboutComponent}

    ];
@NgModule({

    imports:[  RouterModule.forRoot(appRoutes, { useHash: true })],
    exports:[RouterModule]
   
})
export class appRoutiingModule {


}