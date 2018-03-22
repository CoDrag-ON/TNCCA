import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  

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
     public navParams: NavParams,
     private storage: Storage)
      {

        this.storage.get('name').then((val=>
        {
          this.Name = val;
        }
        ));

        this.storage.get('dob').then((val=>
        {
          this.DOB = val;
        }
        ));
        this.storage.get('place').then((val=>
        {
              this.Place = val;
        }
        ));


      this.storage.get('city').then((val=>
        {
          this.City = val;
        }
      ));
      this.storage.get('parish').then((val=>
        {
          this.Parish = val;
        }
      ));
      this.storage.get('diocese').then((val=>
        {
          this.Diocese = val;
        }
      ));
      this.storage.get('TNCCA').then((val=>
        {
          this.TNCCA_zone = val;
        }
      ));
      this.storage.get('aadhar').then((val=>
        {
          this.Aadhar_id = val;
        }
      ));
      this.storage.get('role_in_choir').then((val=>
        {
          this.Role_in_choir = val;
        }
      ));
      this.storage.get('mobile').then((val=>
        {
          this.Mobile = val;
        }
      ));

      this.storage.get('email').then((val=>
        {
          this.Email_id = val;
        }
      ));

      this.storage.get('about').then((val=>
        {
          this.About = val;
        }
      ));

      

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  logout(){
    this.navCtrl.setRoot(LoginPage)
  }

}
