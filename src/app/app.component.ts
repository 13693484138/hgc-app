import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
//import { Network }  from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any;
   constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
//  private network:Network,
//  private loadingCtrl:LoadingController
  ) {
    platform.ready().then(() => {
      const user=localStorage.getItem('token');
      if(user){//判断用户token是否存在
        this.rootPage = TabsPage;
      }else{
        this.rootPage =LoginPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
//    this.checkNetWork();
    });
  }
//checkNetWork(){
//  if(this.network.type=='unknown'||this.network.type=="none"){
//     let loader = this.loadingCtrl.create({
//       content:'当前网络不可用,请检查网络设置'
//     })
//     loader.present();
//  }
//}
}
