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
import { LoginPage } from "../pages/login/login";
import { GetmoneyPage } from "../pages/getmoney/getmoney";
import { NewsPage } from "../pages/news/news";
import { HttpProvider } from '../providers/http/http';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { Network }  from '@ionic-native/network';
import { HttpModule } from '@angular/http';
import { MsgProvider } from '../providers/msg/msg';
import { QRCodeModule } from 'angularx-qrcode';
import { PhonePipe } from '../pipes/phone/phone';
import { CallNumber } from '@ionic-native/call-number';
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
    TeamPerformancePage,
    LoginPage,
    GetmoneyPage,
    NewsPage,
    PhonePipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    QRCodeModule,
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
    TeamPerformancePage,
    LoginPage,
    GetmoneyPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    StorageServiceProvider,
    Network,
    MsgProvider,
    CallNumber
  ]
})
export class AppModule {}
