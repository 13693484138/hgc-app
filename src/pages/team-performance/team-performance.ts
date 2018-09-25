import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the TeamPerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-performance',
  templateUrl: 'team-performance.html',
})
export class TeamPerformancePage {
   currentPage:number=1;
   team:any=[];
   teamall:any=[];
   team2:any=[];
   teamPerformanceForMonth:string;
   teamLeaderboardForMonth:string;
   teamrank:any=[];
   teamrankall:any=[];
   teamrank3:any=[];
   showqb:string="显示全部";
   showph:string="显示全部";
   theFirst:string="assets/imgs/rink/theFirst.png";
   theSecond:string="assets/imgs/rink/theSecond.png";
   third:string="assets/imgs/rink/third.png";
   total:number;
   flag:number=0;
   load:boolean=false;
   shopname:string=localStorage.getItem('shopName');
   loader:boolean=false;
   
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }

  ionViewDidLoad() {
    //成员列表
    this.http.hgcpost("home/getTeamMemberInfo",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      		this.teamall=data.data.list;
      		this.team2=data.data.list.slice(0,2);
      		this.team=this.team2;
      		this.currentPage=data.data.nextPage;
      		this.total=data.data.total;
      		this.flag=data.data.currentPage;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
    //成员排行列表
    this.http.hgcget("home/getTeamPerformanceInfo")
      .subscribe(data=>{
      	if(data.result == '0000'){
      		this.teamrankall=data.data.memberLeaderboard;
      		this.teamrank3=data.data.memberLeaderboard.slice(0,3);
      		this.teamrank=this.teamrank3
      		this.teamLeaderboardForMonth=data.data.teamLeaderboardForMonth;
      		this.teamPerformanceForMonth=data.data.teamPerformanceForMonth;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  doInfinite(infiniteScroll) {
  	this.loader=true;
   	infiniteScroll.enable(false);
    setTimeout(() => {
      this.http.hgcpost("home/getTeamMemberInfo",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.teamall=this.teamall.concat(data.data.list);
      	  this.team=this.teamall;
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
  showteam(){
  	if(this.showqb=="显示全部"){
  		this.load=true;
  		this.showqb="收起 ";
  		this.team=this.teamall;
  	}else{
  		this.load=false;
  		this.showqb="显示全部";
  		this.team=this.team2;
  	}
  }
  
  showrank(){
  	if(this.showph=="显示全部"){
  		this.showph="收起";
  		this.teamrank=this.teamrankall;
  	}else{
  		this.showph="显示全部";
  		this.teamrank=this.teamrank3;
  	}
  }

}
