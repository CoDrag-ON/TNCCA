import { Component } from '@angular/core';
import {AlertController,LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';

/**
 * Generated class for the HolyMassSongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-holy-mass-songs',
  templateUrl: 'holy-mass-songs.html',
})
export class HolyMassSongsPage {

  Songs:any;


  loader: any;

  
  descending: boolean = false;
  order: number;
  column: string = 'title';

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private song:SongsProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,) {
      this.presentLoading();
      this.song.getAllHollyMassSongs().subscribe(data=>{
        this.Songs = data;
        //console.log(this.songs)
        this.loader.dismiss();
      },(error)=>{
        this.loader.dismiss();
      this.showAlert();
      })
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolyMassSongsPage');
  }

  play(link)
  {
    this.song.play(link);
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading songs from Database..."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while Loading events',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }




}
