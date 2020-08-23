import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";


const appRoutes:Routes=[
    {path:'',redirectTo:'/about',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'tutorials',component:TutorialsComponent},
    {path:'testimonial',component:TestimonialComponent},
    {path:'contact',component:ContactComponent},
    // {path:'',redirectTo:'/about',pathMatch:'full'},
    // {path:'about',redirectTo:'/about',pathMatch:'full'},
    // {path:'tutorials',redirectTo:'/about',pathMatch:'full'},
    // {path:'testimonial',redirectTo:'/about',pathMatch:'full'},
    // {path:'contact',redirectTo:'/about',pathMatch:'full'},
    ];
@NgModule({

    imports:[  RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
   
})
export class appRoutiingModule {}