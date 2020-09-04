import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/login/login.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: IUser[];

  newUser: IUser = {
    id: 0,
    firstName: '',
    lastName: '',
    dob: '',
    emailId: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zipcode: 0,
    userName: '',
    isAdmin: false,
    password: ''
  };

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  public save(userForm: NgForm) {
    if (userForm && userForm.valid) {
      console.log('save', this.newUser);
      this.userService.createUser(this.newUser).subscribe((data) => {
        console.log('user savaed');
        this.router.navigateByUrl('/login');
      });;
    }
  }

}
