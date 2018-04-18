import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams ,ViewController} from 'ionic-angular';
import { MsgCommentsProvider } from '../../providers/msg-comments/msg-comments';


import { Storage } from '@ionic/storage';
import { MessageProvider } from '../../providers/message/message';
import { EventCommentProvider } from '../../providers/event-comment/event-comment';


/**
 * Generated class for the EventReplayModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-replay-model',
  templateUrl: 'event-replay-model.html',
})
export class EventReplayModelPage {
  id:any;
  e_id:any;
  u_id:any;

  reply:any;


  Allreplay:any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view:ViewController,
    private loadingCtrl:LoadingController,
    private storage:Storage,
    private evt:EventCommentProvider,
   private msgp:MessageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventReplayModelPage');

    this.id = this.navParams.get('id')
    this.e_id = this.navParams.get('e_id')

    this.storage.get('name').then((val)=>
    {
      this.u_id = val;
    });

    this.evt.getEventReplay(this.e_id,this.id).subscribe(data=>{
      console.log(data)
      this.Allreplay = data;
    })
    
  }

  close(){
    this.view.dismiss();
  }

  sendReply(){
    //console.log(this.id,this.u_id)
    this.evt.insertCommentReplay(this.id, this.e_id, this.u_id, this.reply);
    this.evt.getEventReplay(this.e_id,this.id).subscribe(data=>{
      console.log(data)
      this.Allreplay = data;
    })
    this.reply = "";
  }

}
