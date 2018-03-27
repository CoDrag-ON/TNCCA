import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuerysPage } from './querys';

@NgModule({
  declarations: [
    QuerysPage,
  ],
  imports: [
    IonicPageModule.forChild(QuerysPage),
  ],
})
export class QuerysPageModule {}
