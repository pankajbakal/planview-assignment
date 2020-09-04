import { Injectable } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: IUser;
  isAdmin = null;
  users: IUser[] = [];
  userBlockedFlag = false;

  get isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  constructor(private userService: UserService) { }

  logout(): void {
    this.currentUser = null;
  }

  login(userName: string, password: string): boolean {
    let userExist = false;
    for (const user of this.users) {
      if (user.userName === userName && user.password === password) {
        this.userBlockedFlag = false;
        userExist = true;
        this.currentUser = user;
        this.isAdmin = user.isAdmin;
      } else if ((user.userName === userName && user.password !== password) || (user.userName !== userName && user.password === password)) {
        this.userBlockedFlag = true;
      }
    }
    return userExist;
  }
}
