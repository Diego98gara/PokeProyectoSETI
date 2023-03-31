import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-servicios-api',
  templateUrl: './servicios-api.component.html',
  styleUrls: ['./servicios-api.component.css']
})

export class ServiciosApiComponent {

  constructor(private http: HttpClient) { };


  getPkemoEspe(numero: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);

  }

  getPKtype(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/type/${id}`);
  }

}
