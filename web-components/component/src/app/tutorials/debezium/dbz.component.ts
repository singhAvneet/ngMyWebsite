import { Component } from '@angular/core';
@Component({
  selector: 'dbz-app',
  templateUrl: 'dbz.component.html',
  styleUrls: ['dbz.component.scss']
})
export class DebeziumComponent  {

  constructor( ) { 
      window.scroll({ 
        top: -1000, 
        left: 0, 
        behavior: 'smooth' 
      });
      }
 
}
