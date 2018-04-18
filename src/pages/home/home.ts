import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage,AlertController,LoadingController, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { ModelProvider } from '../../providers/model/model';
import { Content } from 'ionic-angular';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('scroller')  scroller: Content;
  
  Events:any;

  loader: any;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private news:NewsProvider,
    private model:ModelProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

     
    
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.news.getNews().subscribe((data)=>
    {
      this.Events = data
      this.scrollToBottom();
      console.log(data)
      this.loader.dismiss();
    },(error)=>{
      this.showAlert();
    });
    
  }

  scrollToBottom(): void {
    setTimeout(()=>{
      this.scroller.scrollToBottom(300)
    },1000
   )}

  showComents(id)
  {
    console.log(id)
    this.model.presentEventModal(id)
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading Events from Database..."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while Loading events',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }


 
}
