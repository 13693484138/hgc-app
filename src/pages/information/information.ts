import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider,imgUrl } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  currentPage:number=1;
  list:any=[];
  imgurl:string=imgUrl;
  total:number;
  flag:number=0;
  loader:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider,public msg:MsgProvider) {
  }

  ionViewDidLoad() {
    this.http.hgcpost("info/getInfo",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.list=data.data.list;
      	  this.currentPage=data.data.nextPage;
      	  this.flag=data.data.currentPage;
      	  this.total=data.data.total;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  
   doInfinite(infiniteScroll) {
   	this.loader=true;
   	infiniteScroll.enable(false);
    setTimeout(() => {
      this.http.hgcpost("info/getInfo",{"currentPage":this.currentPage})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.list=this.list.concat(data.data.list);
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
