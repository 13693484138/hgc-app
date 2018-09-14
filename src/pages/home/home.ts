import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RankingListPage } from "../ranking-list/ranking-list";
import { MyCommissionPage } from "../my-commission/my-commission";
import { InvitingMembersPage } from "../inviting-members/inviting-members";
import { TeamPerformancePage } from "../team-performance/team-performance";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  turnTo(nav){
    if (nav =='RankingListPage') {
      this.navCtrl.push(RankingListPage);
    } else if (nav == 'MyCommissionPage') {
      this.navCtrl.push(MyCommissionPage);
    } else if (nav == 'InvitingMembersPage') {
      this.navCtrl.push(InvitingMembersPage);
    } else if (nav == 'TeamPerformancePage') {
      this.navCtrl.push(TeamPerformancePage);
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
