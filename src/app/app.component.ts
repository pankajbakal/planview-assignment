import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planview-assignment';
  isLoggedIn = true;
  userName = 'Pankaj';

  constructor(private loginService: LoginService) {
    // this.userName = loginService.currentUser.userName;
  }
}
