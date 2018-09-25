import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MsgProvider } from '../../providers/msg/msg';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  currentPage:number=1;
  list:any=[];
  total:number;
  flag:number=0;
  loader:boolean=false;
  constructor(public navCtrl: NavController,public http:HttpProvider,public msg:MsgProvider) {

  }
  
  ionViewDidLoad() {
    this.data();
  }
  data(){
  	    //最新任务
    this.http.hgcpost("home/getTaskList",{"currentPage":this.currentPage})
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
  task(item:string){
  	//接任务
  	this.http.hgcpost("home/acceptTask",{"taskId":item})
      .subscribe(data=>{
      	if(data.result == '0000'){
      		this.currentPage=1;
      		this.msg.toast('成功!');
      	  this.data();
      	}else{
          this.msg.toast(data.msg);
      	}
    });
  }
  
  doInfinite(infiniteScroll) {
  	this.loader=true;
   	infiniteScroll.enable(false);
    setTimeout(() => {
      this.http.hgcpost("home/getTaskList",{"currentPage":this.currentPage})
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
