import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebeziumComponent } from './tutorials/debezium/dbz.component';
import { DivolteComponent } from './tutorials/divolte/dv.component';
import { SeoComponent } from './tutorials/seo/seo.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  {path:'exp/dbz',component:DebeziumComponent},
  {path:'exp/dv',component:DivolteComponent},
  {path:'exp/seo',component:SeoComponent},
  {path:'tutorials',component:TutorialsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DebeziumComponent,
  DivolteComponent,
  SeoComponent,
  TutorialsComponent
];
