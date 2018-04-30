import { Component } from '@angular/core';
import { IonicPage, NavController ,LoadingController,AlertController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-today-message',
  templateUrl: 'today-message.html',
})
export class TodayMessagePage {

Allmsg:any
loader: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,private http:HttpClient,
    public songs:SongsProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,) {}

  ionViewDidLoad() {
    this.getMessage()
  }

  play(link)
  {
    this.songs.play(link)
  }

  getMessage(){
    this.presentLoading()
    let url = "http://endln.com/TNCCA/get_daily_message.php"
    this.http.get(url).subscribe(data=>{
      this.Allmsg = data
      console.log(data)
      this.loader.dismiss()
    },(error=>
    {
      this.loader.dismiss()
      this.showAlert()
    }))

  }

  
  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading Messages...."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while loading messages',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }


}

 