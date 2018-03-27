import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { AuthProvider } from '../../providers/auth/auth';

import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  HAS_LOGGED_IN:boolean = false;

  email:string;
  password:string;
  UserDetails:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private auth:AuthProvider,
    private storage: Storage,
   private toast:ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navLogin()
  {
    if( this.email != null || this.password != null)
    {
      this.auth.login(this.email,this.password).subscribe(data=>{
        this.UserDetails = data  
        console.log(this.UserDetails)
        this.storage.set('name', this.UserDetails.name);
        this.storage.set('dob', this.UserDetails.dob);
        this.storage.set('place', this.UserDetails.place);
        this.storage.set('city', this.UserDetails.city);
        this.storage.set('parish', this.UserDetails.parish);
        this.storage.set('diacese', this.UserDetails.diacese);
        this.storage.set('TNCCA', this.UserDetails.TNCCA_zone);
        this.storage.set('aadhar', this.UserDetails.aadhar_id);
        this.storage.set('role_in_choir', this.UserDetails.role_in_choir);
        this.storage.set('mobile', this.UserDetails.mobile);
        this.storage.set('email', this.UserDetails.email);
        this.storage.set('about', this.UserDetails.about);
        this.storage.set('HAS_LOGGED_IN',true);
        


        this.navCtrl.setRoot(TabsPage)
      }
      )

    }else{
      this.toast.sendToast("Enter Correct Information")

    
      //

    }
    if(this.email === "admin" && this.password === "admin")
    {
      this.navCtrl.setRoot(AdminPage)
    }
   
    
  }
  navSignup()
  {
    this.navCtrl.push('SignupPage')
  }

}
