import { Component } from '@angular/core';

import { MyRedditsPage } from '../myreddits/myreddits';
import { AboutPage } from '../about/about';
import { SettingPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyRedditsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = SettingPage;

  constructor() {

  }
}
