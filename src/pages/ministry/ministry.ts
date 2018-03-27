import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the MinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministry',
  templateUrl: 'ministry.html',
})
export class MinistryPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }

  startAudio() {
    console.log("clicked...!")
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio('https://figurable-jack.000webhostapp.com/songs/Kaalam_Yen_Kadhali-StarMusiQ.Com.mp3', options);
  }
 
  stopAudio() {
    this.streamingMedia.stopAudio();
  }
 

  viewBible() 
  {
    this.iab.create('https://ionicframework.com/','_self');
  }

}
