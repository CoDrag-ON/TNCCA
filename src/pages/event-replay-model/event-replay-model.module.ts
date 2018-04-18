import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventReplayModelPage } from './event-replay-model';

@NgModule({
  declarations: [
    EventReplayModelPage,
  ],
  imports: [
    IonicPageModule.forChild(EventReplayModelPage),
  ],
})
export class EventReplayModelPageModule {}
