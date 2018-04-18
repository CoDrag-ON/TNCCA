import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolyMassSongsPage } from './holy-mass-songs';

@NgModule({
  declarations: [
    HolyMassSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(HolyMassSongsPage),
  ],
})
export class HolyMassSongsPageModule {}
