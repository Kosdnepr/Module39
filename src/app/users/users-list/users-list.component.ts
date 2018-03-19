import { Component, OnInit } from '@angular/core';

import { User } from '../models/users';
import { UsersService } from '../users.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User = null;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.usersService.getUsers();
  }

}
