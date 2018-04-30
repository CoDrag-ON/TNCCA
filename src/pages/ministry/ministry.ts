import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TodayMessagePage } from '../today-message/today-message';

import { AboutTnccaPage } from '../about-tncca/about-tncca';
import { HolyMassSongsPage } from '../holy-mass-songs/holy-mass-songs';
import { ActivityPage } from '../activity/activity';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient,HttpHeaders } from '@angular/common/http';




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

  playReponse()
  {
    this.date = new Date();

    var dd = this.date.getDate();
    var mm = this.date.getUTCMonth()+1;
    var yyyy = this.date.getFullYear();
    let dateOfString = this.date.getFullYear().toString() + "-";
    dateOfString += (("" + mm).toString().length < 2 ? "0" : "") + mm + "-";
    dateOfString += (("" + dd).toString().length < 2 ? "0" : "") + dd ;

    
    let dat:string = dateOfString.toString()
    //alert(dateOfString)
    

    let url =" http://endln.com/TNCCA/get_daily_songs.php";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "date" : dat}
      

         

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         console.log(data)
         
      },
      (error : any) =>
      {
        
         console.log(error)
      });
  }

}
