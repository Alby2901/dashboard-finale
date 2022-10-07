import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false

  constructor() { }

  isAutenticated(){
    return this.isLoggedIn
  }

  logMeIn(){
    this.isLoggedIn = true
  }

  logMeOut(){
    this.isLoggedIn = false
  }
}
