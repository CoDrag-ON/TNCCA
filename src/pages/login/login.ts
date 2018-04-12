import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

import { ToastProvider } from '../../providers/toast/toast';
import { UserProvider } from '../../providers/user/user';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  email:string;
  password:string;
  UserDetails:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private auth:AuthProvider,
     private storage:Storage,
   private toast:ToastProvider,
  private user:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  navSignup()
 {
   this.navCtrl.push(SignupPage)

 }

  navLogin()
  {
    if(this.email === "admin" && this.password === "admin")
    {
      this.navCtrl.setRoot(AdminPage)
    }
    else if( this.email != null || this.password != null)
    {
      this.auth.login(this.email,this.password).subscribe(data=>{
        this.UserDetails = data  
        this.user.setUserDetail(this.UserDetails)
        this.storage.set('LoggedIn', true);

        console.log(this.UserDetails)
        
        this.navCtrl.setRoot(TabsPage)
      },(error:any)=>{
        this.toast.sendToast("provide correct information")
      }
      )
    }else{
      this.toast.sendToast("Enter Correct Information")

    }
  }
  
 

}
