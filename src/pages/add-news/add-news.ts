import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the AddNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-news',
  templateUrl: 'add-news.html',
})
export class AddNewsPage {

  title:string;
  body:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private news:NewsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewsPage');
  }

  addEvent(){
    this,this.news.insertEvent(this.title,this.body);
    this.navCtrl.pop()
  }
  cancel()
  {
    this.navCtrl.pop()
  }

}
