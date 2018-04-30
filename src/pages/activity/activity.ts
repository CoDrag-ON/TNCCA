import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  title:string;
  body:string

  All:any

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private activity:ActivityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.get()
  }

  get()
  {
    this.activity.get().subscribe(data=>{
      this.All = data
      console.log(this.All)
    })
  }

}
