import { Component, OnInit } from '@angular/core';
import { WebComponentService } from 'src/app/shared/services/app.service';
import{DynamicScriptLoaderService} from '../../../shared/services/dynamic-script-loader-service.service';

@Component({
  selector: 'game-app',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.scss'],
  providers: [
    DynamicScriptLoaderService ,WebComponentService
  ]
})
export class GameComponent  {

  show:boolean=true;

  constructor(private script:DynamicScriptLoaderService ) { 
   
    }



    openGame(): void {
this.show=false;
      this.script.loadScript('game','game')
   
      
    }

  
 
}
