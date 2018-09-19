import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the RankingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking-list',
  templateUrl: 'ranking-list.html',
})
export class RankingListPage {
  public lists=[];
  description:string;
  theFirst:string="assets/imgs/rink/theFirst.png";
  theSecond:string="assets/imgs/rink/theSecond.png";
  third:string="assets/imgs/rink/third.png";
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingListPage');
    //月排行榜
    this.http.hgcget("home/getLeaderboardInfo")
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      	  this.description=data.data.description;
      	  this.lists=data.data.leaderboardInfoLsit;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }

}
