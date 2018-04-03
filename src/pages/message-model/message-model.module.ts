import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageModelPage } from './message-model';

@NgModule({
  declarations: [
    MessageModelPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageModelPage),
  ],
})
export class MessageModelPageModule {}
