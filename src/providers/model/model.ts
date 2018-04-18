import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalController, NavParams } from 'ionic-angular';
import { ModelPage } from '../../pages/model/model';
import { MessageModelPage } from '../../pages/message-model/message-model';
import { EventReplayModelPage } from '../../pages/event-replay-model/event-replay-model';
import { QueryReplayModelPage } from '../../pages/query-replay-model/query-replay-model';


@Injectable()
export class ModelProvider {

  constructor(public http: HttpClient,
    public modalCtrl: ModalController) {
    console.log('Hello ModelProvider Provider');
  }

  presentEventModal(id) {
    console.log("From Model provider " + id )
    let profileModal = this.modalCtrl.create("ModelPage",{
      ID:id
    });
    profileModal.present();
  }

  presentMessageModel(id)
  {
    let MessageModel = this.modalCtrl.create("MessageModelPage",{
      ID:id,
      
    });
    MessageModel.present();
  }

  presentEventReplayModel(id,eid)
  {
    let MessageModel = this.modalCtrl.create("EventReplayModelPage",{
      id:id,
      e_id:eid
      
    });
    MessageModel.present();
  }
  presentQueryReplayModel(id,q_id){
    let MessageModel = this.modalCtrl.create("QueryReplayModelPage",{
      id:id,
      q_id:q_id
      
    });
    MessageModel.present();
  }

}
