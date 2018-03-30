import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';

@IonicPage()
@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {



  constructor(private iab: InAppBrowser,
    public navCtrl: NavController,
     public navParams: NavParams,
 ) 
    {

  }

  navToMessage(){
    this.navCtrl.push(TodayMessagePage)
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }

 
 
 

  viewBible() 
  {
    this.iab.create('https://ionicframework.com/');
  }

}
