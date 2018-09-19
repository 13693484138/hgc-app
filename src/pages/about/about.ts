import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
import { CallNumber} from "@ionic-native/call-number";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  newarr:any=[];
  currentPage:number=1;
  flag:number;
  personlist:any=[];
  index:number;
  total:number;
  item:string;
  constructor(public navCtrl: NavController,public http:HttpProvider,public msg:MsgProvider,private callNumber: CallNumber) {

  }
  changeli(item:string){
  	//根据分类查询顾客列表
  this.item=item;
  this.currentPage=1;
 
	this.http.hgcpost("customer/getCustomerList",{"currentPage":this.currentPage,"classify":item})
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      		this.personlist=data.data.list;
      		this.currentPage=data.data.nextPage;
      		this.pageSize=data.data.pageSize;
      		this.total=data.data.total;
      		this.flag=data.data.currentPage;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  call(item:string){
  	console.log(item);
    this.callNumber.callNumber(item, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  ionViewDidLoad() {
  	  //分类列表
      this.http.hgcget("customer/getCustomerClassifyList")
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      		this.newarr=data.data;
      		this.index=0;
      		this.changeli(this.newarr[0].id);
      	}else{
          this.msg.toast(data.msg);
      	}
      }); 
  }
   doInfinite(infiniteScroll) {
   	console.log('加载更多开始...');
    setTimeout(() => {
      this.http.hgcpost("customer/getCustomerList",{"currentPage":this.currentPage,"classify":this.item})
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      		this.flag=data.data.currentPage;
      	  this.personlist=this.personlist.concat(data.data.list);
      	  this.currentPage=data.data.nextPage;
      	}else{
          this.msg.toast(data.msg);
      	}
     });
     console.log('加载更多结束...');
      infiniteScroll.complete();
    }, 500);
  }

}
