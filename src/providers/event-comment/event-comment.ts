import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';


/*
  Generated class for the EventCommentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventCommentProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventCommentProvider Provider');
  }

  insertComment(e_id,u_id,comment)

  {
  	let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "e_id" : e_id,
           "u_id" : u_id, "comment" : comment},
      

          url       : any        = URI+ "event_comments.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         
      },
      (error : any) =>
      {
         console.log(error)
      });

  }

  getComment(e_id)
  {
    let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "select", "e_id" : e_id,
           },
      

          url       : any        = URI+ "event_comments.php";

     return this.http.post(url, JSON.stringify(options), headers)
      
  }

}
