import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
import { GetmoneyPage } from '../getmoney/getmoney';
/**
 * Generated class for the MyCommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-commission',
  templateUrl: 'my-commission.html',
})

export class MyCommissionPage {
  currentPage:number=1;
  flag:number=0;
  moneylist:any=[];
  drawDepositTotal:number;
  workerProfitMonth:number;
  workerProfitTotal:number;	
  balance:number;
  drawDepositIng:number;
  total:number;
  loader:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }

  ionViewDidLoad() {
  	//我的佣金
  	this.http.hgcget("home/getCommissionInfo")
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.drawDepositTotal=data.data.drawDepositTotal;
      	  this.workerProfitMonth=data.data.workerProfitMonth;
      	  this.workerProfitTotal=data.data.workerProfitTotal;
      	  this.balance=data.data.balance;
      	  this.drawDepositIng=data.data.drawDepositIng;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  	//佣金列表
    this.http.hgcpost("home/getCommissionList",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      		this.moneylist=data.data.list;
      		this.currentPage=data.data.nextPage;
      		this.total=data.data.total;
      		this.flag=data.data.currentPage;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  getM(){
  	this.navCtrl.push(GetmoneyPage);
  }
  doInfinite(infiniteScroll) {
  	this.loader=true;
   	infiniteScroll.enable(false);
    setTimeout(() => {
      this.http.hgcpost("home/getCommissionList",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.moneylist=this.moneylist.concat(data.data.list);
      	  this.currentPage=data.data.nextPage;
      	  this.flag=data.data.currentPage;
      	  infiniteScroll.enable(true);
      	  this.loader=false;
      	}else{
          this.msg.toast(data.msg);
      	}
     });
      infiniteScroll.complete();
    }, 500);
  }

}
