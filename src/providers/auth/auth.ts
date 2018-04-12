import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ToastProvider } from '../toast/toast';





@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,private toast:ToastProvider) {
  }



  insertUser(name,dob,place,city,parish,diocese,TNCCA_zone,Aadhar_id,Role_in_choir,Mobile,Email_id,About,Password)

  {
  	let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "name" : name,
           "dob" : name, "place" : place, "city" : city,
        "parish":parish,"diocese":diocese,"TNCCA_zone":TNCCA_zone,
        "aadhar":Aadhar_id,"role_in_choir":Role_in_choir,
      "mobile":Mobile,"email":Email_id,"about":About,"password":Password},
      

          url       : any        = URI+ "user.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.toast.sendToast(`your account has ben created: ${name}`);
      },
      (error : any) =>
      {
        this.toast.sendToast('Something went wrong!');
         console.log(error)
      });

  }

  getAllUser()
  {
    return this.http.get("http://endln.com/TNCCA/get_all_user.php")
  }

  login(email,password)
  {
    let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any    = { "key" : "login", "email" : email, "password": password },
      
          url       : any        = URI+ "user.php";

      return this.http.post(url, JSON.stringify(options), headers)
      
  }

  delete(id)
  {
    let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any    = { "key" : "delete", "id" : id},
      
          url       : any        = URI+ "user.php";

      return this.http.post(url, JSON.stringify(options), headers)
      
  }


}
