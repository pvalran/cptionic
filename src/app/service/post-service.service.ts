import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IObjRequest } from '../interfaces/IObjRequest';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  constructor(private httpClient: HttpClient) { }
  urlServer: string = "https://64.225.45.9:90/";

  getPetition(url: string) {
    return this.httpClient.get<IObjRequest>(this.urlServer + url);
  }

  postPetition(url: string, data: any, token: string = "") {
    //Establecemos cabeceras
    let httpOptions: HttpHeaders = new HttpHeaders();
    httpOptions.set('Content-Type', 'application/json');

    if (token != "") {
      httpOptions.set('Authorization', token);
    }

    return this.httpClient.post<IObjRequest>(this.urlServer + url, data, { headers: httpOptions }).toPromise();
  }

}
