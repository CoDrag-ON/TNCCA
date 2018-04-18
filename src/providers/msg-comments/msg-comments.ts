import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MsgCommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsgCommentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MsgCommentsProvider Provider');
  }

  insertComment(q_id,u_id,comment)

  {
  	let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "q_id" : q_id,
           "u_id" : u_id, "comment" : comment},
      

          url       : any        = URI+ "msg_comments.php";

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

  getComment(q_id)
  {
    let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "select", "q_id" : q_id,
           },
      

          url       : any        = URI+ "msg_comments.php";

     return this.http.post(url, JSON.stringify(options), headers)
      
  }

  getQueryReplay(q_id,id)
  {
   let URI = "http://endln.com/TNCCA/";

   let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
       options   : any    = { "key" : "selectreply", "q_id" : q_id, "parent" : id},
     
         url       : any        = URI+ "msg_comments.php";

    return this.http.post(url, JSON.stringify(options), headers)
  }

  insertQueryReplay(id, q_id, u_id, comment)
  {
    let URI = "http://endln.com/TNCCA/";
    console.log(q_id,u_id);

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "replay", "q_id" : q_id,
          "u_id" :u_id, "comment" : comment, "par" : id},
      

          url       : any        = URI+ "msg_comments.php";

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

}
