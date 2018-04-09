import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SongsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SongsProvider Provider');
  }

  getAll()
  {
    return this.http.get("http://endln.com/TNCCA/getAllSongs.php");
  }

}
