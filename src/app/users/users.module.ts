import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersDetailsComponent,
    UsersListComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
