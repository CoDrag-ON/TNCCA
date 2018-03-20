import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ToastProvider } from '../toast/toast';





@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,private toast:ToastProvider) {
  }

<<<<<<< HEAD
<<<<<<< HEAD
  insertUser(name,dob,place,city,parish,diocese,tncca_zone,aadhar,role_in_choir,mobile,email,about,pass)
=======
  insertUser(Name,DOB,Place,City,Parish,Diocese,TNCCA_zone,Aadhar_id,Role_in_choir,Mobile,Email_id,About,Password)
>>>>>>> 38d81d38c5f49eaff9a108726f3ca0bbacbcf1bd
=======
  insertUser(name,dob,p,year)
>>>>>>> parent of 327f06b... zxa
  {
  	let URI = "https://figurable-jack.000webhostapp.com/cyril/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
<<<<<<< HEAD
<<<<<<< HEAD
          options   : any    = { "key" : "create", "name" : name,"dob":dob,"place":place,"city":city,"parish":parish,"diocese":diocese,"tncca_zone":tncca_zone,"aadhar":aadhar,"role_in_choir":role_in_choir,"moblie":mobile, "email" : email, "password" : pass },
=======
          options   : any    = { "key" : "create", "name" : Name,
           "dob" : DOB, "place" : Place, "city" : City,
        "parish":Parish,"diocese":Diocese,"TNCCA_zone":TNCCA_zone,
        "aadhar":Aadhar_id,"role_in_choir":Role_in_choir,
      "mobile":Mobile,"email":Email_id,"about":About,"password":Password},
      
<<<<<<< HEAD
          url       : any        = URI+ "user.php";
=======
>>>>>>> 38d81d38c5f49eaff9a108726f3ca0bbacbcf1bd
=======
          options   : any    = { "key" : "create", "name" : name, "password" : pass, "email" : email, "year" : year },
>>>>>>> parent of 327f06b... zxa
          url       : any        = URI+ "connection.php";
>>>>>>> 7d188af16ad927642323d36ff747263d0fb03ffc

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.toast.sendToast(`your account has ben created: ${Name}`);
      },
      (error : any) =>
      {
        this.toast.sendToast('Something went wrong!');
         console.log(error)
      });

  }

<<<<<<< HEAD
  getAllUser()
  {
    return this.http.get("https://figurable-jack.000webhostapp.com/cyril/get_all_user.php")
  }

  login(email,password)
  {
    let URI = "https://figurable-jack.000webhostapp.com/cyril/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "login", "email" : email },
      
          url       : any        = URI+ "user.php";

      return this.http.post(url, JSON.stringify(options), headers)
      
  }

=======
<<<<<<< HEAD
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
=======
>>>>>>> 7d188af16ad927642323d36ff747263d0fb03ffc
  
>>>>>>> 38d81d38c5f49eaff9a108726f3ca0bbacbcf1bd

}
