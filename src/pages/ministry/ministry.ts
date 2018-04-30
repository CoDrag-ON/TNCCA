import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';

import { AboutTnccaPage } from '../about-tncca/about-tncca';
import { HolyMassSongsPage } from '../holy-mass-songs/holy-mass-songs';
import { ActivityPage } from '../activity/activity';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseSongsPage } from '../response-songs/response-songs';




@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {

  date:Date
  dateInString:string

  constructor(private iab: InAppBrowser,private http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }
  navToMessage(){
    this.navCtrl.push("TodayMessagePage")
  }
  navHolyMAssSongs()
  {
    this.navCtrl.push(HolyMassSongsPage)
  }

  navToActivity(){
    this.navCtrl.push(ActivityPage)
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

 

  navReponse(){
    this.navCtrl.push(ResponseSongsPage)
  }


}
