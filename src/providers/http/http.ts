import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";
import { map } from 'rxjs/operators';
import { StorageServiceProvider } from '../storage-service/storage-service';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
public url="http://192.168.1.247:8080/app/";
  constructor(public http:Http,public storage:StorageServiceProvider){
  	
  }
  //登录接口不传令牌post
  hgclogin(funName:string,data:any){
    const headers = new Headers({'Content-Type': 'text/plain;charset=UTF-8'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+funName,data,options).pipe(map(res => res.json()));
  }

  //接口必须传令牌post
  hgcpost(funName:string,data:any){
    let headers1 = new Headers();
    headers1.append('Content-Type','text/plain;charset=UTF-8');
    headers1.append('Authorization',this.storage.read('user').data.user.token);    
    
    const options1 = new RequestOptions({ headers: headers1 });
    return this.http.post(this.url+funName,data,options1).pipe(map(res => res.json()));
  }
  
  //get请求
  hgcget(funName:string){
    let headers2 = new Headers();
    headers2.append('Content-Type','text/plain;charset=UTF-8');
    headers2.append('Authorization',this.storage.read('user').data.user.token);  
    
    const options2 = new RequestOptions({ headers: headers2 });
    return this.http.get(this.url+funName,options2).pipe(map(res => res.json()));
  }

}
export const imgUrl="http://192.168.1.247:8080/attachment/download/";//图片显示



