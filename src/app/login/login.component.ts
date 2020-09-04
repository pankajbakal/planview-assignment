import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../user/user.service';
import { LoginService } from './login.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private router: Router) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      this.loginService.users = data;
    });
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const username = loginForm.value.username;
      const password = loginForm.value.password;

      const login = this.loginService.login(username, password);
      if (login) {
        this.router.navigateByUrl('/landing');
      } else {
        this.router.navigateByUrl('/login');
      }

    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
