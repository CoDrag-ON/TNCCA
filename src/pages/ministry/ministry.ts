import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';

import { AboutTnccaPage } from '../about-tncca/about-tncca';



/**
 * Generated class for the MinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

  navToMessage(){
    this.navCtrl.push("TodayMessagePage")
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }

  
  openAccount()
  {
    //this.navCtrl.push(AboutPage)
  }



  viewBible() 
  {
 
    const browser = this.iab.create('http://www.arulvakku.com/index.html');
    browser.insertCSS({ code: "head{color: red;" }); 
  }
  abtUs()
  {
    this.navCtrl.push("AboutTnccaPage")
  }

}
