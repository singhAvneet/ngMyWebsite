import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {WebEmailService} from '../shared/services/app.service'
import { Email } from '../shared/model/email'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit , OnChanges {
  tel: string = '';
  province: string = '';
  submitted:boolean=true;
  model = new Email("","","");


constructor(private service:WebEmailService){
  window.scroll({ 
    top: -1000, 
    left: 0, 
    behavior: 'smooth' 
  });
}
  ngOnChanges(changes: SimpleChanges): void {
   console.log("avneet",changes);

  }
  ngOnInit() {
 

    var el = document.getElementById('contact');
    // this._appService.sayHello()
    //   .subscribe(
    //     result => {
    //       this.province = result.region_name;
    //       switch (result.region_code) {
    //         case "SK": this.tel = "3065024823"; break;
    //         case "AB": this.tel = "5872870207"; break;
    //         case "BC": this.tel = "7786505198"; break;
    //       }
    //     }
    //   );
  }


  async onSubmit(model:Email) { 
this.submitted= await this.service.sendEmail(model);
    console.log(this.submitted,model)
   }




}



