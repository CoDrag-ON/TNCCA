import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNewsPage } from '../add-news/add-news';
import { NewsProvider } from '../../providers/news/news';
import { ModelProvider } from '../../providers/model/model';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  Events:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private news:NewsProvider,
    private model:ModelProvider) {

     
    
  }

  ionViewDidLoad() {
    this.news.getNews().subscribe((data)=>
    {
      this.Events = data
      console.log(data)
    });
  }

  showComents(id)
  {
    console.log(id)
    this.model.presentEventModal(id)
  }


 
}
