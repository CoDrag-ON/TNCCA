import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { AuthProvider } from '../../providers/auth/auth';

import { ToastProvider } from '../../providers/toast/toast';
import { UserProvider } from '../../providers/user/user';


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
   
   private toast:ToastProvider,
  private user:UserProvider) {
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
        this.user.setUserDetail(this.UserDetails)

        console.log(this.UserDetails)
        
        


        this.navCtrl.setRoot(TabsPage)
      },(error:any)=>{
        this.toast.sendToast("provide correct information")
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
