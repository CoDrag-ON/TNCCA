import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';

import { AboutTnccaPage } from '../about-tncca/about-tncca';




@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }
  navToMessage(){
    this.navCtrl.push("TodayMessagePage")
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
