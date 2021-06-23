import { Injectable } from '@angular/core';
import { WebComponentService } from './app.service';
import { NgElementInfo } from '../interface/ng-element-info';



interface Scripts {
  name: string;
  src: string;
}

declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {
  Dom = document.getElementsByTagName('explore-app')[0].shadowRoot;
  private scripts: any = {};
  private ngElementStore: NgElementInfo[] = [];

  constructor(private elementAddressService: WebComponentService
  
    ) {

  }

  loadScript(name: string, pid: string) {
    this.elementAddressService.getNgElements(name)
        .subscribe(x => {
          this.ngElementStore = x;
          this.ngElementStore.forEach((ngElementInfo: NgElementInfo) => {
            if (ngElementInfo.name === name){
            this.scripts[name] = {
              loaded: false,
              src: ngElementInfo
            };
          }
          });
        }
        );
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        const ngEl = document.createElement(this.scripts[name].src.tagName);
        ngEl.setAttribute(this.scripts[name].src.paramName, pid);
        const script = document.createElement('script');
        this.Dom.getElementById(pid).appendChild(ngEl);
        script.type = 'text/javascript';
        script.src = this.scripts[name].src.src;
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {
          script.onload = (result: any) => {
            console.log(result);
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        this.Dom.getElementById(pid).appendChild(script);
        this.scripts[name].loaded = true;
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }



}
