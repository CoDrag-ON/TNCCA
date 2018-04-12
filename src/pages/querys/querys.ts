import { Component, ViewChild,ElementRef, AfterViewChecked, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { Storage } from '@ionic/storage';

import { ModelProvider } from '../../providers/model/model';
import { Content } from 'ionic-angular';



@Component({
  selector: 'page-querys',
  templateUrl: 'querys.html',
  
})
export class QuerysPage implements AfterViewChecked {

  @ViewChild('scroller')  scroller: Content;
  

  

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
  ngAfterViewChecked(){
    
  }

  ionViewDidLoad() {
    this.scrollToBottom();
   
  }
  scrollToBottom(): void {
    setTimeout(()=>{
      this.scroller.scrollToBottom(300)
    },1000
   )}

  sendMsg(){

    console.log(this.name,this.msg)
    this.message.sendQuery(this.name,this.msg);
    setTimeout(()=>this.message.getQuery().subscribe(data=>
      {
        this.Discussion = data;
        this.msg = "";
      })
      ,500)
      this.scrollToBottom();
  } 
  showComents(id){
    console.log(id);
    this.model.presentMessageModel(id)
  }

  

}
