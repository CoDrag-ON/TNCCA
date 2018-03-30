import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TodayMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today-message',
  templateUrl: 'today-message.html',
})
export class TodayMessagePage {

  

  myDate:IDate;
  todayDate = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    
    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayMessagePage');

    

    var dd = this.todayDate.getDay();
    var mm = this.todayDate.getMonth();
    var yyyy = this.todayDate.getFullYear();

    this.myDate = {
      date : dd,
      month : mm,
      year : yyyy
    }
  }

}

 class IDate{
  date:number;
  month:number;
  year:number;
}
