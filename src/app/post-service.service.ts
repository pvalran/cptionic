import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class returnObj {
  public message: string;
  public success: boolean;
  public data: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getPetition(url:string){
    return this.httpClient.get<returnObj>(url);
  }

  postPetition(url:string, data:any){
    return this.httpClient.post<returnObj>(url, data, this.httpOptions).toPromise();
  }
  
}
