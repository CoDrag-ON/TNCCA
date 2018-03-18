import { Injectable } from '@angular/core';

import {  ToastController } from 'ionic-angular';


/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public toastCtrl  : ToastController) {
    console.log('Hello ToastProvider Provider');
  }


  sendToast(message : string)  : void
  {
     let notification = this.toastCtrl.create({
         message       : message,
         duration      : 1000,
         position      :'top',
         dismissOnPageChange: false,
         cssClass: "sucess_notification",
     });
     notification.present();
  }

}
