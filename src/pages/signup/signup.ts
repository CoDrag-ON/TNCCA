import { user } from './../../model/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  NewUser:user;

  Con_Pass:string;

  Name:string;
  DOB:string;
  Place:string;
  City:string;
  Parish:string;
  Diocese:string;
  TNCCA_zone:string;
  Aadhar_id:number;
  Role_in_Choir:string;
  Number:number;
  Mail_id:string;
  About_me:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SignupPage');
  }
  signup()
  {
    this.NewUser.Name = this.Name;
    this.NewUser.DOB = this.DOB;
    this.NewUser.Place = this.Place;
    this.NewUser.City = this.City;
    this.NewUser.Parish = this.Parish;
    this.NewUser.Diocese = this.Diocese;
    this.NewUser.TNCCA_zone = this.TNCCA_zone;
    this.NewUser.Aadhar_id = this.Aadhar_id;
    this.NewUser.Role_in_choir = this.Role_in_Choir;
    this.NewUser.Mobile = this.Number;
    this.NewUser.Email_id = this.Mail_id;
    this.NewUser.About = this.About_me;
    this.NewUser.Password = this.password;

    console.log(this.NewUser);

  }

}

