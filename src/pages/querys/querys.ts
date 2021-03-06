import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import { NavController,LoadingController,AlertController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { Storage } from '@ionic/storage';

import { ModelProvider } from '../../providers/model/model';
import { Content } from 'ionic-angular';





@Component({
  selector: 'page-querys',
  templateUrl: 'querys.html',
  
})
export class QuerysPage{

  
  

  

  msg:string;
  name:string;

  Discussion:any;

  loader: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public message:MessageProvider,
    private storage: Storage,
    private model:ModelProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    ) {


      this.presentLoading();
      this.message.getQuery().subscribe(data=>
      {
        this.Discussion = data
        console.log(data);
        this.loader.dismiss();
      },(error)=>{
        this.loader.dismiss();
        this.showAlert();
      }) 

      this.storage.get('name').then((val=>
        {
          this.name = val;
        }
        ));
  }

  ionViewDidLoad() {
    
   
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

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading messages...."
    });
 
    this.loader.present();
 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error occured while loading messages',
      subTitle: 'please check internet connection',
      buttons: ['OK']
    });
    alert.present();
  }

  

}
