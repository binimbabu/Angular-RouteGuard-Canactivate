import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsLoggedIn() : any{
    return localStorage.getItem('loginToken');
  }

}
