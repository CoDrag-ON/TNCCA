import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, ToastController } from 'ionic-angular';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { SongsProvider } from '../../providers/songs/songs';


/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {

  Songs:any;

  descending: boolean = false;
  order: number;
  column: string = 'title';

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private streamingMedia: StreamingMedia,
     private songs:SongsProvider
    ) {
      this.songs.getAll().subscribe(data=>{
        console.log(data)
        this.Songs = data
      })
     
    
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  play(link)
  {
    let URI = 'http://endln.com/TNCCA/'+ link
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Audio played') },
      errorCallback: (e) => { console.log('Error streaming') },
      initFullscreen: true,
      bgImage:"http://endln.com/TNCCA/images/bg.jpeg"
      
    };
    console.log(URI)
    this.streamingMedia.playAudio(URI, options);

  }


  
  

 
}
