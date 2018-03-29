import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalController, NavParams } from 'ionic-angular';
import { ModelPage } from '../../pages/model/model';


@Injectable()
export class ModelProvider {

  constructor(public http: HttpClient,
    public modalCtrl: ModalController) {
    console.log('Hello ModelProvider Provider');
  }

  presentEventModal(id) {
    console.log("From Model provider " + id )
    let profileModal = this.modalCtrl.create(ModelPage,{
      ID:id
    });
    profileModal.present();
  }

}