import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,AlertController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
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

  loader: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private auth:AuthProvider,
     private storage:Storage,
   private toast:ToastProvider,
  private user:UserProvider,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController) {
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
    
   if( this.email != null && this.password != null)
    {
      this.presentLoading();
      this.auth.login(this.email,this.password).subscribe(data=>{
        this.UserDetails = data  
        this.user.setUserDetail(this.UserDetails)
        this.storage.set('LoggedIn', true);

        console.log(this.UserDetails)
        
        this.navCtrl.setRoot(TabsPage)
        this.loader.dismiss();
      },(error:any)=>{
        this.loader.dismiss();
        this.showAlert(error);
      }
      )
    }else{
      this.toast.sendToast("Enter Correct Information")

    }
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "please wait while we set things up for you"
    });
 
    this.loader.present();
 
  }

  showAlert(error:any) {
    let alert = this.alertCtrl.create({
      title: 'Error occured while Logging you in',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }
  
 

}
