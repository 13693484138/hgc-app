import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RankingListPage } from "../ranking-list/ranking-list";
import { MyCommissionPage } from "../my-commission/my-commission";
import { InvitingMembersPage } from "../inviting-members/inviting-members";
import { TeamPerformancePage } from "../team-performance/team-performance";
import { ContactPage } from '../contact/contact';
import { GetmoneyPage } from '../getmoney/getmoney';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	avatar:string;
	shopName:string;
	balance:number;     		
	customerNum:number;
	expected:number;
	monthCommission:number;
	newCustomerNum:number;
	todayTask:string;
	todaytask:boolean=false;
	name:string=this.storage.read('user').data.user.name;
  turnTo(nav){
    if (nav =='RankingListPage') {
      this.navCtrl.push(RankingListPage);
    } else if (nav == 'MyCommissionPage') {
      this.navCtrl.push(MyCommissionPage);
    } else if (nav == 'InvitingMembersPage') {
      this.navCtrl.push(InvitingMembersPage);
    } else if (nav == 'TeamPerformancePage') {
      this.navCtrl.push(TeamPerformancePage);
    }else if(nav == 'ContactPage'){
    	this.navCtrl.push(ContactPage);
    }else if(nav =='GetmoneyPage'){
    	this.navCtrl.push(GetmoneyPage);
    }
  }
  constructor(public navCtrl: NavController,public http:HttpProvider,public msg:MsgProvider,public storage:StorageServiceProvider) {

  }
  
  
   ionViewDidLoad() {
  	this.http.hgcget("home/getHomeInfo")
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      		this.avatar=data.data.avatar;
      		this.shopName=data.data.shopName;
      		this.customerNum=data.data.customerNum;
      		this.expected=data.data.expected;
      		this.monthCommission=data.data.monthCommission;
      		this.newCustomerNum=data.data.newCustomerNum;
      		this.balance=data.data.balance;
      		
      		if(data.data.todayTask.length>0){
      			this.todaytask=true;
      			this.todayTask=data.data.todayTask;
      		}else{
      			this.todaytask=false;
      		}
          
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }

}
