import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { Storage } from '@ionic/storage';

import { ModelProvider } from '../../providers/model/model';



@IonicPage()
@Component({
  selector: 'page-querys',
  templateUrl: 'querys.html',
})
export class QuerysPage {

  msg:string;
  name:string;

  Discussion:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public message:MessageProvider,
    private storage: Storage,
    private model:ModelProvider) {

      this.message.getQuery().subscribe(data=>
      {
        this.Discussion = data
        console.log(data);
      }) 

      this.storage.get('name').then((val=>
        {
          this.name = val;
        }
        ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuerysPage');
  }

  sendMsg(){

    console.log(this.name,this.msg)
    this.message.sendQuery(this.name,this.msg);
    setTimeout(()=>this.message.getQuery().subscribe(data=>
      {
        this.Discussion = data;
        this.msg = "";
      })
      ,500)
  } 
  showComents(id){
    console.log(id);
    this.model.presentMessageModel(id)
  }

}
