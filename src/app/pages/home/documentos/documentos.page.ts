import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  lstComprobante: any[] = [];

  constructor(
    private navCtrl: NavController,
    private service: PostServiceService
  ) { }

  ngOnInit() {
    this.service.getPetition("documents/type/getByClass/1").subscribe(
      result => {
        if(result.data.length > 0){
          result.data.forEach(element => {
            this.lstComprobante.push(element)
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  guardarDocumentos() {
    //this.validateForm();
    this.navCtrl.navigateRoot('/home', { animated: true });
  }

}
