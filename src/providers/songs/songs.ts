import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  AlertController,LoadingController } from 'ionic-angular';


import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';


@Injectable()
export class SongsProvider {

  loader: any;
  constructor(public http: HttpClient,
    private fileChooser: FileChooser,
    private filePath:FilePath,
    private transfer:FileTransfer,
    private streamingMedia: StreamingMedia,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    console.log('Hello SongsProvider Provider');
  }

  getAll()
  {
    return this.http.get("http://endln.com/TNCCA/getAllSongs.php");
  }
  getAllHollyMassSongs()
  {
    return this.http.get("http://endln.com/TNCCA/getAllHolyMassSongs.php");
  }


 

  play(link)
  {
    
    let URI = 'http://endln.com/TNCCA/'+ link
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Audio played') },
      errorCallback: (e) => { console.log('Error streaming') },
      initFullscreen: false,
      bgImageScale: "fit", 
      
      bgImage:"http://endln.com/TNCCA/images/bg.jpg"
      
    };
    console.log(URI)
    this.streamingMedia.playAudio(URI, options);

  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: " please wait Preparing song for you"
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
