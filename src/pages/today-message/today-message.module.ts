import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayMessagePage } from './today-message';

@NgModule({
  declarations: [
    TodayMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(TodayMessagePage),
  ],
})
export class TodayMessagePageModule {}
