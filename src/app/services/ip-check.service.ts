import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

const authEndpoint = 'https://api.grupoe.meseguercr.com/api/auth'; 
const blockedEndpoint = 'https://api.grupoe.meseguercr.com/api/blocklist' 

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
          this.http.get(blockedEndpoint+'/'+this.ipAddress.ip).subscribe(
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
          this.http.get(blockedEndpoint+'/'+actualIp.ip).subscribe(
            (response2) => {
              if (response2 == null) 
              {
                this.http.post(blockedEndpoint+'/add',ipInfo).subscribe(
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

