import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'game-wc',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  title = 'hello from angular app';
  author='© 2018 by Avneet Singh '; 
}
