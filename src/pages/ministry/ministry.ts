import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ToastProvider } from '../../providers/toast/toast';

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



  constructor(private iab: InAppBrowser,
    public navCtrl: NavController,
     public navParams: NavParams,
     private streamingMedia: StreamingMedia,
     private transfer: FileTransfer,
     private file: File,
    public toast:ToastProvider) 
    {

  }

  fileTransfer: FileTransferObject = this.transfer.create();





  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryPage');
  }

 
 
 

  viewBible() 
  {
    this.iab.create('https://ionicframework.com/','_self');
  }

}
