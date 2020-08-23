import { Component, OnInit, ElementRef, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {   
  prepaidUrl: string='https://www.sasktel.com/Accolade/Login.do#!';
  prepaidUrl2:string='https://www.sasktel.com/Accolade/LoadCustomerProfile.do';
  prepaidUrl3:string='https://www.beanstream.com/secure/sasktelprepaid/prepaid-one-time-topup.html?ordPhoneNumber=';
  sasktelUrl: string='https://www.sasktel.com/personal/internet/internet-compare';
  gitUrlJ2EE: string='https://github.com/singhAvneet/OnlinePizzaService';
  gitUrlgame: string='https://github.com/singhAvneet/WarCry-2Dgame';
  gitUrlgame1:string='https://github.com/singhAvneet/Game1Project';
  gitUrlng: string='https://github.com/singhAvneet/NodeJsSampleApp';
     items: Array<any>= [] ;
     gamesArray: Array<any>= [] ;
   choosenItem: number=0 ;
workItem:string='images';
   graphitems: Array<any>= [] ;
   gamesitems: Array<any>= [] ;
   graphChoosen: number=0 ;
   gameChoosen: number=0 ;
   graphItem: string ='Front-End';
   urlApi: string='https://singhavneet.000webhostapp.com/vote/api.html' ;
   url2: string='https://singhavneet.000webhostapp.com/vote/monthGraph.html' ; 
   urlGame0: string='https://singhavneet.000webhostapp.com/game/game.html' ;
   urlGame1: string='https://singhavneet.000webhostapp.com/game/game.html' ;
index:number=0;

  constructor() {

this.graphitems=[{url:this.urlApi},{url:this.url2}];
this.gamesitems=[
  {name:'WarCry',url:this.urlGame0},
  {name:'RaceCry',url:this.urlGame1}
];
// this.gamesitems=[{url:this.urlApi},{url:this.url2}];


      this.items = [
        {
          app:[
              {name:'Front-End',img:'assets/images/sasktel/sask1.png',url:this.sasktelUrl},
              {name:'Sasktel',img:'assets/images/sasktel/sask2.png',url:this.prepaidUrl},
              {name:'Sasktel',img:'assets/images/sasktel/sask3.png',url:this.prepaidUrl2},
              {name:'Sasktel',img:'assets/images/sasktel/sask4.png',url:this.prepaidUrl3},
             
            ]
         },      
     { app:[       
       {name:'J2EE',img:'assets/images/jee/jee1.png',url:this.gitUrlJ2EE},
      {name:'J2EE1',img:'assets/images/jee/jee2.png',url:this.gitUrlJ2EE},
      {name:'J2EE',img:'assets/images/jee/jee3.png',url:this.gitUrlJ2EE}
     ]}
     ,
     {
      app:[
          {name:'AngularJS',img:'assets/images/angularjs/ng1.png',url:this.gitUrlng},
          {name:'angularjs',img:'assets/images/angularjs/ng2.png',url:this.gitUrlng},
          
        ]
     },
     
     {
      app:[
          {name:'C#',img:'assets/images/csharp/game1.png',url:this.gitUrlgame1},
          {name:'csharp',img:'assets/images/csharp/game2.png',url:this.gitUrlgame1},
          {name:'csharp',img:'assets/images/csharp/game3.png',url:this.gitUrlgame},
          // {name:'csharp',img:'assets/images/csharp/game4.png'},
          // {name:'csharp',img:'assets/images/csharp/game5.png'},
         
        ]
      },
    
    ];
  
  }

  ngOnInit() {
    
  }

  onClickWorkFile(tab:string){
this.workItem=tab;

  }
 
  onSelect(tab:string){ 
    this.graphItem=tab;
    this.index=0;
    switch(tab) { 
      case "Front-End": { 
          this.choosenItem=0;
                break; 
      } 
      case "J2EE": { 
        this.choosenItem=1;
          break; 
      } 
      case "AngularJS": {
        this.choosenItem=2;
          break;    
      } 
      case "C#": { 
        this.choosenItem=3;
          break; 
      }  
      case "barGraph": { 
        this.graphChoosen=0;    
          break; 
      } 
      case "dashBoard": { 
        this.graphChoosen=1;      
          break; 
      }   
      case "WarCry": { 
        this.gameChoosen=0;      
          break; 
      } 
      case "RaceCry": { 
        this.gameChoosen=1;      
          break; 
      } 
      default: { 
        
          console.log("Invalid choice"); 
          break;              
      } 
    }

  }

  instantiateIndex(index:number){
this.index=index;
  }

}
