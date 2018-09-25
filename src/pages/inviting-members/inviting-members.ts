import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the InvitingMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inviting-members',
  templateUrl: 'inviting-members.html',
})
export class InvitingMembersPage {
  qrcode:string='rrrrr';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }

  ionViewDidLoad() {
    this.http.hgcget("home/inviteMemberQRCode")
      .subscribe(data=>{
      	if(data.result == '0000'){
      	 this.qrcode=data.data;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }

}