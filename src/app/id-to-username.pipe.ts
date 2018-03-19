import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './articles/models/articles';
import { ARTICLES } from './articles/articles-mock';
import { User } from './users/models/users';
import { USERS } from './users/users-mock';

@Pipe({
  name: 'idToUsername'
})
export class IdToUsernamePipe implements PipeTransform {

  users: User[] = USERS;

  transform(value: number, args?: any): string {
    let user = (this.users.find((u) => u.id === value));
    return `${user.name}`;
  }

}
