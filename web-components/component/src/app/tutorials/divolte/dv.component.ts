import { Component } from '@angular/core';

@Component({
  selector: 'dv-app',
  templateUrl: 'dv.component.html',
  styleUrls: ['dv.component.scss']
})
export class DivolteComponent  {

  constructor( ) { 
    window.scroll({ 
      top: -1000, 
      left: 0, 
      behavior: 'smooth' 
    });
    }
 
}
