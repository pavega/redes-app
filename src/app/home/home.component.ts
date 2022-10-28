import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  htmlTitle: string = 'Redes en los Negocios';
  htmlSourceImage = "https://objectstorage.mx-queretaro-1.oraclecloud.com/p/OxZmzoBJFpXjYaFvMydiFViI9UMVdr3XT1V3Ovdi85ebrHBUWUmB2isdHEKIKb5P/n/axfs3paz6qv2/b/proyectoRedes/o/Resource.jpg";
  htmlPage = '<h1>Hola</h1>';
  mazeData = '';
  httpClient: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.text()
  }

  text(){
    this.httpClient.get('https://objectstorage.mx-queretaro-1.oraclecloud.com/p/PfQKufv3xZLPWh9MKEsnM1coXc5Sy7zIwjk312clPUCp7GfxNbwMP4yvNgrT3QVZ/n/axfs3paz6qv2/b/proyectoRedes/o/home.txt', { responseType: 'text' })
      .subscribe((data: string) => this.mazeData = data);
      console.log(this.mazeData);
    }

}
