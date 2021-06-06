import { Component, OnInit } from '@angular/core';
import{DynamicScriptLoaderService} from '../../shared/services/dynamic-script-loader-service.service';

@Component({
  selector: 'seo-app',
  templateUrl: 'seo.component.html',
  styleUrls: ['seo.component.scss']
})
export class SeoComponent implements OnInit {

  constructor(private script:DynamicScriptLoaderService ) { 
    
    window.scroll({ 
      top: -1000, 
      left: 0, 
      behavior: 'smooth' 
    });
    }
    ngOnInit(): void {

      this.script.loadScript('game-wc','game')
      .then(    
        function(){     
        // document.getElementById("explore").style.height="auto"
       }     
      )
      
    }
 
}
