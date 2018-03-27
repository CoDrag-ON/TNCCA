import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';

<<<<<<< HEAD
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ToastProvider } from '../../providers/toast/toast';
=======
>>>>>>> efe681c2b6fbf022dd966f36705a85a5af875d42

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

<<<<<<< HEAD


  constructor(private iab: InAppBrowser,
    public navCtrl: NavController,
     public navParams: NavParams,
     private streamingMedia: StreamingMedia,
     private transfer: FileTransfer,
     private file: File,
    public toast:ToastProvider) 
    {

=======
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> efe681c2b6fbf022dd966f36705a85a5af875d42
  }

  fileTransfer: FileTransferObject = this.transfer.create();





  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }

<<<<<<< HEAD
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

  download() {
    
    const url = 'https://figurable-jack.000webhostapp.com/songs/Kaalam_Yen_Kadhali-StarMusiQ.Com.mp3';
    this.fileTransfer.download(url, this.file.dataDirectory + 'Music').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.toast.sendToast("Downloading File")
    }, (error) => {
      alert("Server Down");
      this.toast.sendToast("Failed to download")
    });
  }
 
=======

>>>>>>> efe681c2b6fbf022dd966f36705a85a5af875d42

  viewBible() 
  {
    this.iab.create('https://ionicframework.com/','_self');
  }

}
