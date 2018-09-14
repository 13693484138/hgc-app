import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lists = [{ name: "名字1", ranksrc: "assets/imgs/rink/theFirst.png", portrait: "assets/imgs/rink/portrait.png",address:"四川武侯区",imgshow:true,ranklist:"01"},
      { name: "名字2", ranksrc: "assets/imgs/rink/theSecond.png", portrait: "assets/imgs/rink/portrait.png", address: "四川武侯区", imgshow: true, ranklist: "02"},
      { name: "名字3", ranksrc: "assets/imgs/rink/third.png", portrait: "assets/imgs/rink/portrait.png", address: "四川武侯区", imgshow: true, ranklist: "03"},
      { name: "名字4", ranksrc: "", portrait: "assets/imgs/rink/portrait.png", address: "四川武侯区", imgshow: false, ranklist: "04"},
      { name: "名字5", ranksrc: "", portrait: "assets/imgs/rink/portrait.png", address: "四川武侯区", imgshow: false, ranklist: "05"},
      { name: "名字6", ranksrc: "", portrait: "assets/imgs/rink/portrait.png", address: "四川武侯区", imgshow: false, ranklist: "06"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingListPage');
  }

}
