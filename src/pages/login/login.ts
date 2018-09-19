import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { TabsPage } from '../../pages/tabs/tabs';
import { IonicPage, NavController, NavParams,ToastController,App,Platform} from 'ionic-angular';
import { MsgProvider } from '../../providers/msg/msg';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName:string="15523289005";
  passWord:string="123456";
  constructor( 
	private http:HttpProvider,
    private storage:StorageServiceProvider,
    private app:App,
    private msg:MsgProvider
  ) {
  }
  login(){
  	  if(!this.userName){
  	  	this.msg.toast("用户名不能为空!");
  	  }else if(!this.passWord){
  	  	this.msg.toast("密码不能为空!");
  	  }else{
  	  	
  	  this.http.hgclogin("login/worker",{"userName":this.userName,"passWord":this.passWord})
      .subscribe(data=>{
      	console.log(data);
      	if(data.result == '0000'){
      		this.storage.write("user",data);
            this.app.getRootNav().push(TabsPage);
      	}else{
      		this.msg.toast(data.msg);
      	}
      }); 
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
