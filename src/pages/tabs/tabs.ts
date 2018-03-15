import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ForumPage';
  tab2Root = 'SongsPage';
  tab3Root = 'AboutPage';

  constructor() {

  }
}
