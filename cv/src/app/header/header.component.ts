import { Component, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked{ 


  active = '';
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

constructor( private route: Router){
}
  ngAfterContentChecked(): void {
    this.active=this.route.url.replace('/','')
  }


}
