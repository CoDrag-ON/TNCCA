import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, ToastController } from 'ionic-angular';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';


/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private streamingMedia: StreamingMedia
    ) {
      
     
    
  }

  play()
  {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      initFullscreen: false,
      
    };
    this.streamingMedia.playAudio('http://endln.com/TNCCA/songs/Kadhal_Kappal-StarMusiQ.Com.mp3', options);

  }


  
  

 
}
