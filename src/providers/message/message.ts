import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';


import { AngularFireDatabase} from 'angularfire2/database';
import { ToastProvider } from '../toast/toast';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient,private  afDb: AngularFireDatabase,
  public toast:ToastProvider) {
    
  }

  getMessage()
  {
    return this.afDb.list('messages').valueChanges();
  }

  sendMsg(name,msg)
  {
    this.afDb.list('messages').push({name,msg});
  }


  sendQuery(uid,message)
  {
    let URI = "https://figurable-jack.000webhostapp.com/cyril/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "uid" : uid,
           "message" : message},
      

          url       : any        = URI+ "query.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.toast.sendToast(`your message has ben created: ${message}`);
      },
      (error : any) =>
      {
        this.toast.sendToast('Something went wrong!');
         console.log(error)
      });
  }

  getQuery()
  {
    let URI = "https://figurable-jack.000webhostapp.com/cyril/get_all_query.php";
    return this.http.get(URI);
  }

}
