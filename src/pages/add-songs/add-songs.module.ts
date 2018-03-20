import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSongsPage } from './add-songs';

@NgModule({
  declarations: [
    AddSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSongsPage),
  ],
})
export class AddSongsPageModule {}
