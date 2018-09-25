import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
import { CallNumber} from "@ionic-native/call-number";
/**
 * Generated class for the SearchcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchc',
  templateUrl: 'searchc.html',
})
export class SearchcPage {
  personlist:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider,private callNumber: CallNumber) {
  }

  ionViewDidLoad() {

  }
  data(item:any){
  	if(item.target.value){
  		this.http.hgcget("customer/searchCustomerInfo/"+item.target.value)
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.personlist=data.data;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  	}
  }
  
  onCancel(){
  	this.personlist=[];
  }
  
  call(item:string){
    this.callNumber.callNumber(item, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
