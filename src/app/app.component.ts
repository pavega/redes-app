import { Component, OnInit } from '@angular/core';
import { IpCheckService } from './ip-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ip: IpCheckService){}
  ngOnInit(): void {
    this.ip.verifyIp();
  }
  title = 'App Redes';
}