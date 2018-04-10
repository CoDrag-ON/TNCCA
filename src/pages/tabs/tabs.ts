import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';

import { MinistryPage } from '../ministry/ministry';
import { SongsPage } from '../songs/songs';
import { HomePage } from '../home/home';
import { QuerysPage } from '../querys/querys';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root:any = MinistryPage;
  tab2Root:any = SongsPage;
  tab3Root:any = HomePage;
  tab4Root:any = QuerysPage;

  constructor(public navCtrl: NavController) {
     
  }

  doClick(){
    
  }
  openAccount()
  {
    this.navCtrl.push("AboutPage")
  }
}
