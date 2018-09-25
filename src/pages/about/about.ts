import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
import { CallNumber } from '@ionic-native/call-number';
import { SearchcPage } from "../searchc/searchc";
//import * as $ from 'jquery';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  newarr:any=[];
  currentPage:number=1;
  flag:number=0;
  personlist:any=[];
  index:number;
  total:number;
  item:string;
  listlen:number;
  loader:boolean=false;
  
  constructor(public navCtrl: NavController,public http:HttpProvider,public msg:MsgProvider,private callNumber: CallNumber) {

  }
  changeli(item:string){
  //根据分类查询顾客列表
  this.item=item;
  this.currentPage=1;
	this.http.hgcpost("customer/getCustomerList",{"currentPage":this.currentPage,"classify":item})
      .subscribe(data=>{
//    	console.log(data);
      	if(data.result == '0000'){
      		this.personlist=data.data.list;
      		this.currentPage=data.data.nextPage;
      		this.total=data.data.total;
      		this.flag=data.data.currentPage;
      		this.listlen=this.personlist.length;
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  call(item:string){
    this.callNumber.callNumber(item, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  
  ionViewDidLoad() {
  	  //分类列表
      this.http.hgcget("customer/getCustomerClassifyList")
      .subscribe(data=>{
//    	console.log(data);
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
   	this.loader=true;
   	infiniteScroll.enable(false);
    setTimeout(() => {
      this.http.hgcpost("customer/getCustomerList",{"currentPage":this.currentPage,"classify":this.item})
      .subscribe(data=>{
      	if(data.result == '0000'){
      	  this.flag=data.data.currentPage;
      	  this.personlist=this.personlist.concat(data.data.list);
      	  this.listlen=this.personlist.length;
      	  this.currentPage=data.data.nextPage;
      	  infiniteScroll.enable(true);
      	  this.loader=false;
      	}else{
          this.msg.toast(data.msg);
      	}
     });
      infiniteScroll.complete();
    }, 500);
  }

   searchc(){
   	this.navCtrl.push(SearchcPage);
   }

}
