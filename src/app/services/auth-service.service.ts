import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  user: any;

  constructor(public rest: LoginServiceService) {
    const token = localStorage.getItem('App Redes');
    this._isLoggedIn$.next(!!token);
  }

  login(loginData:any){
    return this.rest.login(loginData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('App Redes', response.jwtToken)
        this.user = this.getUser(response.jwtToken)
      })
    );
  }

  logout(){
    this._isLoggedIn$.next(false);
    return localStorage.clear();
  }

  getStorageRole(){
    const token = localStorage.getItem('App Redes');
    if(token!=null){
      const storageUser = this.getUser(token);
      return storageUser;
    }
  }


  private getUser(token: any){
    if(token!=null){
      return JSON.parse(atob(token.split('.')[1]))
    }
  }
}
