import { Injectable } from '@angular/core';

import { User } from './models/users';
import { USERS } from './users-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsersService {
  users: User[] = USERS;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number) {
    return of(this.users.find((u) => u.id === id));
  }

}
