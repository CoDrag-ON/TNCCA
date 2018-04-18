import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController  } from 'ionic-angular';
import { MsgCommentsProvider } from '../../providers/msg-comments/msg-comments';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the QueryReplayModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-query-replay-model',
  templateUrl: 'query-replay-model.html',
})
export class QueryReplayModelPage {

  id:any
  q_id:any


  u_id:any;

  reply:any;


  Allreplay:any
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private storage:Storage,
     private view:ViewController,
    private msgCmt:MsgCommentsProvider) {

      this.id = this.navParams.get('id')
      this.q_id = this.navParams.get('q_id')

      this.storage.get('name').then((val)=>
    {
      this.u_id = val;
    }); 

    this.msgCmt.getQueryReplay(this.q_id,this.id).subscribe(data=>{
      console.log(data)
      this.Allreplay = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryReplayModelPage');
  }

  close(){
    this.view.dismiss();
  }

  sendReply(){
    this.msgCmt.insertQueryReplay(this.id,this.q_id,this.u_id,this.reply);
    this.msgCmt.getQueryReplay(this.q_id,this.id).subscribe(data=>{
      console.log(data)
      this.Allreplay = data;
    })

    this.reply = "";
  }

}
