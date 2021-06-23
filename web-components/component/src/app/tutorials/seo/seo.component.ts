import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seo-app',
  templateUrl: 'seo.component.html',
  styleUrls: ['seo.component.scss']
 
})
export class SeoComponent implements OnInit {

  constructor( ) { 
    
    window.scroll({ 
      top: -1000, 
      left: 0, 
      behavior: 'smooth' 
    });
    }
    ngOnInit(): void {

      // this.script.loadScript('game','game')
   
      
    }
 
}
