import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AddNewsPage } from '../add-news/add-news';
import { AddSongsPage } from '../add-songs/add-songs';
import { AllNewsPage } from '../all-news/all-news';
import { AllSongsPage } from '../all-songs/all-songs';

import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

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
    private auth:AuthProvider,
    private fileChooser: FileChooser,
   private filePath:FilePath,
   private transfer:FileTransfer) {
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
  AddMusic()
  {
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolvedFilePath =>{

        const fileTransfer: FileTransferObject = this.transfer.create();

        let options1: FileUploadOptions = {
           fileKey: 'file',
           fileName: resolvedFilePath ,
           headers: {}
        
        }
    
    fileTransfer.upload(resolvedFilePath, 'http://endln.com/TNCCA/upload.php', options1)
     .then((data) => {
       // success
       alert("success");
     }, (err) => {
       // error
       alert("error"+JSON.stringify(err));
     });


        alert(resolvedFilePath)
      
      })
    })
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
