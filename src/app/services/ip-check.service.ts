import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

const authEndpoint = 'http://localhost:8097/api/auth'; 
const blockedEndpoint = 'http://localhost:8097/api/blocklist' 

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
          this.http.get("http://localhost:8097/api/blocklist/"+this.ipAddress.ip).subscribe(
            (response2) => {
              if (response2 != null) this.router.navigate(['blockme']); 
            }  
          );
        },
        error => {
          this.router.navigate(['blockme']);
        }
      )};

  blockIp(){
    
    let actualIp: any; 
    const ipInfo = {
      'Id':0,
      'ipAddress':''
    }

    this.http.get("https://api.ipify.org/?format=json").subscribe(
        (response) => {
          actualIp = response;
          ipInfo.ipAddress = actualIp.ip;
          this.http.get("http://localhost:8097/api/blocklist/"+actualIp.ip).subscribe(
            (response2) => {
              if (response2 == null) 
              {
                this.http.post("http://localhost:8097/api/blocklist/add/",ipInfo).subscribe(
                  (response3) => {
                    alert("You have being blocked")
                  }  
                );
              } 
            }  
          );
        },
        error => {
          this.router.navigate(['blockme']);
        }
      )
  }

  
}

