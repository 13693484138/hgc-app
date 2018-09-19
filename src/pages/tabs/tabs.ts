import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';
import { HomePage } from '../home/home';
import { InformationPage } from "../information/information";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NewsPage;
  tab4Root = InformationPage;

  constructor() {

  }
}
