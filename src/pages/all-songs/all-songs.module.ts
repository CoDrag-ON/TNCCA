import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllSongsPage } from './all-songs';

@NgModule({
  declarations: [
    AllSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllSongsPage),
  ],
})
export class AllSongsPageModule {}
