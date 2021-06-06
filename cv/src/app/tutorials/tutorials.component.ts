import { Component, OnInit } from '@angular/core';
import{DynamicScriptLoaderService} from '../shared/services/dynamic-script-loader-service.service';
import{WebComponentService} from '../shared/services/app.service';
declare var document: any;

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  providers: [
    DynamicScriptLoaderService ,WebComponentService
  ]
})

export class TutorialsComponent implements OnInit {

  constructor(
    private script:DynamicScriptLoaderService
    ) { 
      window.scroll({ 
        top: -1000, 
        left: 0, 
        behavior: 'smooth' 
      });
      }
  ngOnInit(): void {

    this.script.loadScript('explore-app','explore')
    .then(    
      function(){     
      document.getElementById("explore").style.height="auto"
     }     
    )
    
  }

 
 



}
