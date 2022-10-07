import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cucu!';

  constructor(public authService: AuthService){

  }

  onClickLogin(){
    this.authService.logMeIn()
  }

  onClickLogout(){
    this.authService.logMeOut()
  }

}
