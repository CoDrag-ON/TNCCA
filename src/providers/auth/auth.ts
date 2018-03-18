import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {  ToastController } from 'ionic-angular';





@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,public toastCtrl  : ToastController) {
  }

  insertUser(Name,DOB,Place,City,Parish,Diocese,TNCCA_zone,Aadhar_id,Role_in_choir,Mobile,Email_id,About,Password)
  {
  	let URI = "https://figurable-jack.000webhostapp.com/cyril/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "name" : Name,
           "dob" : DOB, "place" : Place, "city" : City,
        "parish":Parish,"diocese":Diocese,"TNCCA_zone":TNCCA_zone,
        "aadhar":Aadhar_id,"role_in_choir":Role_in_choir,
      "mobile":Mobile,"email":Email_id,"about":About,"password":Password},
      
          url       : any        = URI+ "connection.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.sendSucessNotification(`your account has ben created: ${Name}`);
      },
      (error : any) =>
      {
         this.sendFailureNotification('Something went wrong!');
         console.log(error)
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
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 1000,
          position      :'top',
          dismissOnPageChange: false,
          cssClass: "fail_notification",
      });
      notification.present();
   }

}
