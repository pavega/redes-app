import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

const authEndpoint = 'http://localhost:8097/api/auth'; //para despues con base

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};


@Injectable({
  providedIn: 'root'
})
export class IpCheckService {

  constructor(private http:HttpClient,private router: Router){}  
  title = 'App Redes';  
  ipAddress: any; 

  verifyIp()
  {
      this.http.get("https://api.ipify.org/?format=json").subscribe(
        (response) => {
          this.ipAddress = response;
          console.log(this.ipAddress.ip)
        },
        error => {
          this.router.navigate(['blockme']);
          //PRUEBA logica de bloquear
        }
      )};

}
