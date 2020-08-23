import { Component, OnInit, Injectable,Input, ElementRef } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';





@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})



export class VoteComponent implements OnInit {
   url:string;
  @Input() modell: string;

  constructor (private hostElement:ElementRef) {
    
  }
  ngOnInit() {
      this.url = this.modell; 
      const iframe=this.hostElement.nativeElement.querySelector('iframe');  
      iframe.src=this.url;
  
  }

}
