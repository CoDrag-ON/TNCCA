import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AddNewsPage } from '../add-news/add-news';
import { AddSongsPage } from '../add-songs/add-songs';
import { AllNewsPage } from '../all-news/all-news';
import { AllSongsPage } from '../all-songs/all-songs';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  AllUsers:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');


    this.auth.getAllUser().subscribe(data =>
    {
      this.AllUsers = data
      console.log(data)
    })

  }

  openAddEvent()
  {
    this.navCtrl.push(AddNewsPage);

  }
  openAddMusic()
  {
    this.navCtrl.push(AddSongsPage)
  }

  openAllNews()
  {
    this.navCtrl.push(AllNewsPage)
  }

  openAllSongs()
  {
    this.navCtrl.push(AllSongsPage)
  }



}
