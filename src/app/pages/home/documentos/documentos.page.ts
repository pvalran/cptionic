import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  lstComprobante: ISelectDTO[] = [
    {
      id: 1,
      text: 'Luz'
    },
    {
      id: 2,
      text: 'Telefono'
    },
    {
      id: 3,
      text: 'Agua'
    }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  guardarDocumentos() {
    //this.validateForm();
    this.navCtrl.navigateRoot('/statusenrolamiento', { animated: true });
  }

}
