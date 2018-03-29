import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  imageURI:any;
  imageFileName:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private transfer: FileTransfer,
     private camera: Camera,
     public loadingCtrl: LoadingController,
     public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsPage');
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

      let options: FileUploadOptions = {
        fileKey: 'ionicfile',
        fileName: 'ionicfile.png',
        chunkedMode: false,
        headers: {}
      }

    fileTransfer.upload(this.imageURI,'https://figurable-jack.000webhostapp.com/cyril')
      .then((data) => {
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      loader.dismiss();
      this.presentToast("Image uploaded failed");
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
