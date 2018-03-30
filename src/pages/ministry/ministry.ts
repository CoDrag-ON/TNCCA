import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';


/**
 * Generated class for the MinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

<<<<<<< HEAD
  navToMessage(){
    this.navCtrl.push(TodayMessagePage)
  }




=======
>>>>>>> 3eea2e95bb4079e43cf4d553216757e6a0f954d1
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }



  viewBible() 
  {
    this.iab.create('https://ionicframework.com/','_self');
    const browser = this.iab.create('https://ionicframework.com/');
    browser.insertCSS({ code: "head{color: red;" }); 
  }
  c

}
