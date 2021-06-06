import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  prepaidUrl: string = 'https://www.sasktel.com/Accolade/Login.do#!';
  prepaidUrl2: string = 'https://www.sasktel.com/Accolade/LoadCustomerProfile.do';
  prepaidUrl3: string = 'https://www.beanstream.com/secure/sasktelprepaid/prepaid-one-time-topup.html?ordPhoneNumber=';
  sasktelUrl: string = 'https://www.sasktel.com/personal/internet/internet-compare';
  active = 'home';
  items: Array<any> = [];

  constructor() {
    this.items = [
      {
        app: [
          { name: 'Front-End', img: 'assets/images/sasktel/sask1.png', url: this.sasktelUrl },
          { name: 'Sasktel', img: 'assets/images/sasktel/sask2.png', url: this.prepaidUrl },
          { name: 'Sasktel', img: 'assets/images/sasktel/sask3.png', url: this.prepaidUrl2 },
          { name: 'Sasktel', img: 'assets/images/sasktel/sask4.png', url: this.prepaidUrl3 },

        ]
      },
    
    ];
    window.scroll({ 
      top: -1000, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

 

  onClickLink(tabNAme: string) {
    this.active = tabNAme
  }

  }




