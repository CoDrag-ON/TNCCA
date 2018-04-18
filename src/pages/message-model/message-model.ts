import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams ,ViewController} from 'ionic-angular';
import { MsgCommentsProvider } from '../../providers/msg-comments/msg-comments';


import { Storage } from '@ionic/storage';
import { MessageProvider } from '../../providers/message/message';
import { ModelProvider } from '../../providers/model/model';



@IonicPage()
@Component({
  selector: 'page-message-model',
  templateUrl: 'message-model.html',
})
export class MessageModelPage {
  u_id:string
  data:string
  msg:string

  message:any;

  Comments:any

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private view:ViewController,
     private loadingCtrl:LoadingController,
     private storage:Storage,
     private msgcmt:MsgCommentsProvider,
    private msgp:MessageProvider,
  private model:ModelProvider) {

      

      this.storage.get('name').then((val)=>
      {
        this.u_id = val;
        console.log(this.u_id)
      });
      
  
      this.presentLoadingDefault()
  
      this.data = this.navParams.get('ID')
      console.log(this.data)

     // this.msgp.getQuery()

      this.msgcmt.getComment(this.data).subscribe(data=>{
        this.Comments = data
        console.log(this.Comments)
      })

      this.msgp.get(this.data).subscribe(data=>{
        this.message = data;
        console.log(this.message)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageModelPage');
  }

  sendCmt(){

    this.msgcmt.insertComment(this.data,this.u_id,this.msg);
    this.msg = "";
    this.msgcmt.getComment(this.data).subscribe(data=>{
      this.Comments = data
      console.log(this.Comments)
    })
  }


  close(){
    this.view.dismiss();
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

  ViewReplay(id,q_id)
  {
    this.model.presentQueryReplayModel(id,q_id);
    console.log(id,q_id);
    
  }


}
