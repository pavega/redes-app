import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const UserEndpoint = 'https://api.grupoe.meseguercr.com/api/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  addUser(User:any){
    return this.http.post(UserEndpoint+'/addUser', User, httpOptions);
  }
}
