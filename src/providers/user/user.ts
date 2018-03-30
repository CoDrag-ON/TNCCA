import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient,
  private storage:Storage) {
    console.log('Hello UserProvider Provider');
  }


  setUserDetail(UserDetails)
  {
        this.storage.set('id',UserDetails.id)
        this.storage.set('name', UserDetails.name);
        this.storage.set('dob', UserDetails.dob);
        this.storage.set('place', UserDetails.place);
        this.storage.set('city',UserDetails.city);
        this.storage.set('parish',UserDetails.parish);
        this.storage.set('diacese',UserDetails.diacese);
        this.storage.set('TNCCA', UserDetails.TNCCA_zone);
        this.storage.set('aadhar', UserDetails.aadhar_id);
        this.storage.set('role_in_choir',UserDetails.role_in_choir);
        this.storage.set('mobile', UserDetails.mobile);
        this.storage.set('email',UserDetails.email);
        this.storage.set('about',UserDetails.about);
        this.storage.set('HAS_LOGGED_IN',true);
        console.log(UserDetails)
  }

  getUserDetail()
  {
    
  }
  getUserID(){
    return this.storage.get('id')
  }
  getUserName(){

    let name;
    this.storage.get('name').then((val)=>
      {
        name = val;
      });
      return name;
  }

}
