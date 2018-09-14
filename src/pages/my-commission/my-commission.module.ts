import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCommissionPage } from './my-commission';

@NgModule({
  declarations: [
    MyCommissionPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCommissionPage),
  ],
})
export class MyCommissionPageModule {}
