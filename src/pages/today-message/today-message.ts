import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';

@IonicPage()
@Component({
  selector: 'page-today-message',
  templateUrl: 'today-message.html',
})
export class TodayMessagePage {

  myDate:IDate;
  todayDate = new Date();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public songs:SongsProvider) {}

  ionViewDidLoad() {
    var dd = this.todayDate.getDay();
    var mm = this.todayDate.getMonth();
    var yyyy = this.todayDate.getFullYear();

    this.myDate = {
      date : dd,
      month : mm,
      year : yyyy
    }
  }

  get(date)
  {
    console.log(date)
  }
  play(link)
  {
    this.songs.play(link)
  }

}

 class IDate{
  date:number;
  month:number;
  year:number;
}
