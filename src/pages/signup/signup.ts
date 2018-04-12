import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {



  NewUser:any;

  ConPass:string;

  Name:string;
  DOB:string;
  Place:string;
  City:string;
  Parish:string;
  Diocese:string;
  TNCCA_zone:string;
  Aadhar_id:number;
  Role_in_choir:string;
  Mobile:number;
  Email_id:string;
  About:string;
  Password:string;


  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
     private auth:AuthProvider,
     public loadingCtrl: LoadingController,
     public toast:ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  SendData()
  {
      this.auth.insertUser(
        this.Name,
        this.DOB,
        this.Place,
        this.City,
        this.Parish,
        this.Diocese,
        this.TNCCA_zone,
        this.Aadhar_id,
        this.Role_in_choir,
        this.Mobile,
        this.Email_id,
        this.About,
        this.Password
      );
  

  }

  signup() {
    let loader = this.loadingCtrl.create({
      content: "Creating account",
      duration: 3000
    });
    loader.present();

    setTimeout(()=>{
      this.SendData()
      //this.navCtrl.pop()

    })
  }

}

