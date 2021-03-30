import { Injectable } from '@angular/core';
import {LayoutService} from '../shared-module/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private layoutService: LayoutService) {
  }

  // fake credentials
  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  private isUserLoggedIn = false;

  // fake login
  login(login, password) {
    return new Promise<void>((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password){
        this.isUserLoggedIn = true;
        this.layoutService.showSidebar();
        resolve();
      } else {
        reject();
      }
    });
  }

  logOut(){
    this.isUserLoggedIn = false;
    this.layoutService.hideSidebar();
  }

  isLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }

}
