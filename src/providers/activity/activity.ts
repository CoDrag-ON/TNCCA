import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ActivityProvider Provider');
  }


  get()
  {
    return this.http.get("http://endln.com/TNCCA/get_ministry.php")
  }
}
