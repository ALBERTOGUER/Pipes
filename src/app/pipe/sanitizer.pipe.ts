import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor( private _domsanitizer:DomSanitizer){

  }

  transform(value: any, url:string): any {
   return this._domsanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
