import { Injectable } from '@angular/core';
import { NgElementInfo } from '../interface/ng-element-info';
import { Observable,of} from 'rxjs';

@Injectable()
export class WebComponentService {
  constructor() { }

  getNgElements(name: string): Observable<NgElementInfo[]> {
    return of([
      {
        name: 'game-wc',
        src: 'http://127.0.0.1:4201/explore/avneet/game/explore-wc.js',
        tagName: 'game-wc',
        paramName: 'game'
      }
    ]);
  }


  
}


