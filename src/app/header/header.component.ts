import { Component, OnInit, Output,EventEmitter   } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  clickMessage = '';
  @Output() tabSelected: EventEmitter<any> = new EventEmitter();
 // navbar-header
  onClickMe() {
    var  nav = document.getElementById('nav-barId');
   var  el = document.getElementById('myNavbar');   
    el.setAttribute("style", "display:block;");
    nav.setAttribute("style", "display:none;"); 

  }
  onClickLink(tabNAme){
    var  nav = document.getElementById('nav-barId');
    var  el = document.getElementById('myNavbar');    
    el.setAttribute("style", "display:none;");
    nav.setAttribute("style", "display:block;"); 

 
    this.tabSelected.emit(tabNAme);
  }



}
