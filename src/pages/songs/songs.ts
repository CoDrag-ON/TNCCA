import { Component } from '@angular/core';
import {  AlertController , NavController, NavParams ,LoadingController, ToastController } from 'ionic-angular';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { SongsProvider } from '../../providers/songs/songs';


@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {

  Songs:any;

  descending: boolean = false;
  order: number;
  column: string = 'title';

  loader: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private streamingMedia: StreamingMedia,
     private songs:SongsProvider,
     public loadingCtrl: LoadingController,
     public alertCtrl: AlertController
    ) {
      this.presentLoading();
      this.songs.getAll().subscribe(data=>{
        console.log(data)
        this.Songs = data
        this.loader.dismiss();
      },(error)=>{
        this.loader.dismiss();
        this.showAlert();
      })
     
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad songs');
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  play(link)
  {
    this.songs.play(link)
  }


  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading Songs from Database..."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while loading songs ',
      subTitle: 'please check internet connection or reloading app',
      buttons: ['OK']
    });
    alert.present();
  }

  
  

 
}
