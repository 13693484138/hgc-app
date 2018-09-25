import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the GetmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getmoney',
  templateUrl: 'getmoney.html',
})
export class GetmoneyPage {
  name:string;
  money:number;
  cardNum:number;
  getMoney:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }
  ionViewDidLoad() {
    this.http.hgcget("home/getWorkerNameAndCash")
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.money=data.data.balance;
      	  this.name=data.data.name;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  
  getMyMoney(){
  	this.http.hgcpost("home/withdrawalAmount",{"bankCardNumber":this.cardNum,"amount":this.getMoney})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.msg.toast(data.data);
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }

}
