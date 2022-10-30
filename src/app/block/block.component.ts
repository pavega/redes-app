import { Component, OnInit } from '@angular/core';
import { IpCheckService } from '../services/ip-check.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(public rest: IpCheckService) { }

  ngOnInit(): void {
    this.rest.blockIp();
  }

}
