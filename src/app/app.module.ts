import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InformationPage } from "../pages/information/information";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RankingListPage } from "../pages/ranking-list/ranking-list";
import { MyCommissionPage } from "../pages/my-commission/my-commission";
import { InvitingMembersPage } from "../pages/inviting-members/inviting-members";
import { TeamPerformancePage } from "../pages/team-performance/team-performance";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InformationPage,
    TabsPage,
    RankingListPage,
    MyCommissionPage,
    InvitingMembersPage,
    TeamPerformancePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      mode: 'ios',  //平台样式
      backButtonText: '返回',//按钮内容
      // backButtonIcon: 'myback',//按钮图标样式
      tabsHideOnSubPages: 'true', //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InformationPage,
    RankingListPage,
    MyCommissionPage,
    InvitingMembersPage,
    TeamPerformancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
