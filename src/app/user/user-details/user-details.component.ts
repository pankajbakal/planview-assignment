import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { IUser } from '../user.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      for (const user of this.users) {
        if (user.id === id) {
          this.newUser = user;
          break;
        }
      }
    });
  }

  public save(userForm: NgForm) {
    if (userForm && userForm.valid) {
      console.log('save', this.newUser);
      this.userService.updateUser(this.newUser.id, this.newUser);
    }
  }

  public back() {
    this.router.navigateByUrl('/landing');
  }

}
