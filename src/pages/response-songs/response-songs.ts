import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,AlertController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SongsProvider } from '../../providers/songs/songs';

/**
 * Generated class for the ResponseSongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-response-songs',
  templateUrl: 'response-songs.html',
})
export class ResponseSongsPage {
  Allsongs:any

  loader: any;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private http:HttpClient,
  private song:SongsProvider,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponseSongsPage');
    this.getDailySongs()
  }

  getDailySongs(){
    this.presentLoading()
    let url = "http://endln.com/TNCCA/get_daily_songs.php"
    this.http.get(url).subscribe(data=>{
      this.Allsongs = data
      console.log(data)
      this.loader.dismiss()
    },error=>{
      this.showAlert()
    })
  }

  play(link)
  {
    this.song.play(link)
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading Messages...."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while loading songs',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }


}

