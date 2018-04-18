import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

/*
  Generated class for the SongsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsProvider {

  constructor(public http: HttpClient,
    private fileChooser: FileChooser,
    private filePath:FilePath,
    private transfer:FileTransfer,
    private streamingMedia: StreamingMedia,) {
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


  AddHolyMassMusic()
  {
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolvedFilePath =>{

        const fileTransfer: FileTransferObject = this.transfer.create();

        let options1: FileUploadOptions = {
           fileKey: 'file',
           fileName: resolvedFilePath ,
           headers: {}
        
        }
    
    fileTransfer.upload(resolvedFilePath, 'http://endln.com/TNCCA/tncca_songs_upload.php', options1)
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
