import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './user/user.component';
import { MatIconModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UserManagementModule { }
