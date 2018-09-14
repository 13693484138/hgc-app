import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitingMembersPage } from './inviting-members';

@NgModule({
  declarations: [
    InvitingMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitingMembersPage),
  ],
})
export class InvitingMembersPageModule {}
