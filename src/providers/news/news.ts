import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Http } from '@angular/http';


import { ToastProvider } from '../toast/toast';



/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: Http,private toast:ToastProvider) {
    console.log('Hello NewsProvider Provider');
  }

  insertEvent(title,body)
  {
  	let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "title" : title,"body" : body},
      
          url       : any        = URI+ "news.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.toast.sendToast(`your Event has ben created: ${title}`);
      },
      (error : any) =>
      {
        this.toast.sendToast('Something went wrong!');
         console.log(error)
      });

  }

  getNews()
  {
    let URI = "http://endln.com/TNCCA/news_get.php";
    let params = new HttpParams();
    
    console.log(URI);
    return this.http.get(URI,{params:params}).map((res) => res.json()); 
   }

   getNew(id)
   {
    let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any    = { "key" : "select", "id" : id},
      
          url       : any        = URI+ "news.php";

     return this.http.post(url, JSON.stringify(options), headers)
      
   }

}
