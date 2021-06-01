import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IObjRequest } from '../interfaces/IObjRequest';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getPetition(url: string) {
    return this.httpClient.get<IObjRequest>(url);
  }

  postPetition(url: string, data: any) {
    return this.httpClient.post<IObjRequest>(url, data, this.httpOptions).toPromise();
  }

}
