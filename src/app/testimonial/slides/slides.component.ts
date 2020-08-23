import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['../testimonial.component.scss'],
  // inputs: ['model'],
})
export class SlidesComponent implements OnInit {
 @Output() indexEmitter=new EventEmitter();
 @Input() model: Array<any>;
  ngOnInit() {
  }
  constructor() { }
 emitIndex(index:number){
  this.indexEmitter.emit(index);
 }
}
