import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.usersService.getUser(id)
      })
      .subscribe((data) => this.user = data);
  }

}
