import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import {Observable} from 'rxjs';

import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  Messages:Observable<any[]>

  message:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private msg:MessageProvider,
    public loadingCtrl: LoadingController) {

    this.Messages =  this.msg.getMessage();
    this.presentLoading();
  }

  sendMsg()
  {
    this.msg.sendMsg("name",this.message)
    this.message = ""
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

 

}
