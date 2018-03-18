import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams, } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {  ToastController } from 'ionic-angular';




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,public toastCtrl  : ToastController) {
    console.log('Hello AuthProvider Provider');
  }

  insertUser(name,dob,p,year)
  {
  	let URI = "https://figurable-jack.000webhostapp.com/php/swat/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "name" : name, "password" : pass, "email" : email, "year" : year },
          url       : any        = URI+ "connection.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.sendSucessNotification(`your account has ben created: ${name}`);
      },
      (error : any) =>
      {
         this.sendFailureNotification('Something went wrong!');
      });

  }

  sendSucessNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 1000,
          position      :'top',
          dismissOnPageChange: false,
          cssClass: "sucess_notification",
      });
      notification.present();
   }

   sendFailureNotification(message : string)  : void
   {
      let notification la= this.toastCtrl.create({
          message       : message,
          duration      : 1000,
          position      :'top',
          dismissOnPageChange: false,
          cssClass: "fail_notification",
      });
      notification.present();
   }

}
