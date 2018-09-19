import { Injectable } from '@angular/core';
import { AlertController,ToastController} from 'ionic-angular';
/*
  Generated class for the MsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsgProvider {

  constructor(public toastCtrl: ToastController,public alertCtrl:AlertController) {
    console.log('Hello MsgProvider Provider');
  }
  
  toast(content:string) {
    let toast = this.toastCtrl.create({
      message: content,
      duration: 2500,
      position: 'top'
    });
    toast.present();
  }
  alert(content:string,title:string) {
    let alert = this.alertCtrl.create({
      title:title,
      subTitle:content,
      buttons: ['确定']
    });
    alert.present();
  }

}
