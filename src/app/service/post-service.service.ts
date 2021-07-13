import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';


import { IObjRequest } from '../interfaces/IObjRequest';
import { Token } from 'src/app/models/Token';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
  ) { }

  //urlServer: string = "http://apicpt-env.eba-n3f3tpnc.us-east-1.elasticbeanstalk.com/";
  token: string = null;
  urlServer: string = "http://localhost:8080/";

  getPetition(url: string) {
    return this.httpClient.get<IObjRequest>(this.urlServer + url);
  }


  async postPetition(url: string, data: any, token: boolean = false) {
     return this.httpClient.post<IObjRequest>(this.urlServer + url, data,).toPromise();
  }

  async guardarToken(token: string) {
    this.token = token;
    this.storage.create();
    await this.storage.set('token', token);
    //await this.validaToken();
  }

  async cargarToken() {
    this.storage.create();
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {
    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
    /*
    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE")
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + this.token);

      let urlFinal = this.urlServer + "tipo/datosCatalogo";

      this.httpClient.get(urlFinal, { headers: headers }).toPromise().then(data => {
        resolve(true);
      }).catch(error => {
        console.log(error);
        resolve(false);
        this.navCtrl.navigateRoot('/login');
      })
    });;*/
  }

  async limpiaToken() {
    this.token = null;
    this.storage.clear();
  }
}
