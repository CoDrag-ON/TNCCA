import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';


@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {
  data:number;

  msg:string;

  eventDetail:any

  constructor( public navParams: NavParams,
  private view:ViewController,
  private news:NewsProvider,
  private loadingCtrl:LoadingController
  ) {

    this.presentLoadingDefault()

    this.data = this.navParams.get('ID')
    console.log(this.data)

    this.news.getNew(this.data).subscribe( event=>{
      this.eventDetail = event
      this.eventDetail = this.eventDetail._body
      this.eventDetail = JSON.parse(this.eventDetail)
      console.log(this.eventDetail)
    })
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  close(){
    this.view.dismiss();
  }

  ionViewWillLoad() {
    
  }

}

