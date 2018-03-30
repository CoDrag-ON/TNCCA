import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { EventCommentProvider } from '../../providers/event-comment/event-comment';
import { UserProvider } from '../../providers/user/user';

import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {
  data:number;

  msg:string;
  u_id:string;


  Comments:any;

  eventDetail:any

  constructor( public navParams: NavParams,
  private view:ViewController,
  private news:NewsProvider,
  private loadingCtrl:LoadingController,
  private eventCmt:EventCommentProvider,
  private user:UserProvider,
  private storage:Storage
  ) {

    this.storage.get('name').then((val)=>
    {
      this.u_id = val;
    });
    console.log(this.u_id)

    this.presentLoadingDefault()

    this.data = this.navParams.get('ID')
    console.log(this.data)

    this.news.getNew(this.data).subscribe( event=>{
      this.eventDetail = event
      this.eventDetail = this.eventDetail._body
      this.eventDetail = JSON.parse(this.eventDetail)
      console.log(this.eventDetail)
    })

    this.eventCmt.getComment(this.data).subscribe((data)=>
    {
      this.Comments = data
      this.Comments = this.Comments
      console.log(this.Comments)
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



  sendCmt(){

    
    this.eventCmt.insertComment(this.data,this.u_id,this.msg);

    this.eventCmt.getComment(this.data).subscribe((data)=>
    {
      this.Comments = data
      this.Comments = this.Comments
      console.log(this.Comments)
    })
    this.msg = ""
  }

}

