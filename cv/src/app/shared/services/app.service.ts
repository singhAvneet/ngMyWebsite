import { Injectable } from '@angular/core';
import { NgElementInfo } from '../interface/ng-element-info';
import { HttpClient } from '@angular/common/http';
import { Email } from '../model/email';
import { Observable,of} from 'rxjs';

@Injectable()
export class WebComponentService {
  constructor() { }

  getNgElements(name: string): Observable<NgElementInfo[]> {
    return of([
      {
        name: 'explore',
        src: 'http://127.0.0.1:4201/explore/avneet/explore-app.js',
        tagName: 'explore-app',
        paramName: 'explore'
      }
    ]);
  }
  // http://127.0.0.1:4201/explore/TestComponent/game-wc.js'

  
}


@Injectable()
export class WebEmailService {
   success=false;
    constructor(private http: HttpClient) { }
  
 async sendEmail(model:Email):Promise<boolean>{   

   await this.http.post<any>('https://h6swotw66d.execute-api.ca-central-1.amazonaws.com/apiSqsLambdaAvneetStage/v1/send-enquque', model)
    .toPromise()
      .then(
        data => {
          this.success = data.SendMessageResponse.SendMessageResult.MD5OfMessageBody.match(/[a-zA-Z0-9]/g).length===32?true:false;
      }
      );  
      return this.success;
    }
  }

  // https://kftdbev2p8.execute-api.ca-central-1.amazonaws.com/ProdStage/
  // https://h6swotw66d.execute-api.ca-central-1.amazonaws.com/apiSqsLambdaAvneetStage
  // https://enable-cors.org/server_awsapigateway.html
  // https://medium.com/@andy.tarpley/webhook-processing-with-api-gateway-and-sqs-f8309411913a