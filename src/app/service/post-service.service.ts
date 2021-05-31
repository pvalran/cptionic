import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjRequest } from '../models/ObjRequest';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getPetition(url: string) {
    return this.httpClient.get<ObjRequest>(url);
  }

  postPetition(url: string, data: any) {
    return this.httpClient.post<ObjRequest>(url, data, this.httpOptions).toPromise();
  }

}
