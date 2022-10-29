import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  htmlTitle: string = 'Redes en los Negocios';
  htmlSourceImage = "https://objectstorage.mx-queretaro-1.oraclecloud.com/p/OxZmzoBJFpXjYaFvMydiFViI9UMVdr3XT1V3Ovdi85ebrHBUWUmB2isdHEKIKb5P/n/axfs3paz6qv2/b/proyectoRedes/o/Resource.jpg";  
  constructor(private http: HttpClient) { }
}
