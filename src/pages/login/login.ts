import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { AuthProvider } from '../../providers/auth/auth';

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

  email:string;
  password:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navLogin()
  {
    if(this.email === "admin" && this.password === "admin")
    {
      this.navCtrl.setRoot(AdminPage)
    }
    else{
      this.auth.login(this.email,this.password).subscribe(data=>console.log(data))
      //this.navCtrl.setRoot(TabsPage)

    }
  }
  navSignup()
  {
    this.navCtrl.push('SignupPage')
  }

}
