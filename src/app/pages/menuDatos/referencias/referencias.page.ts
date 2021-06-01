import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';

import { ReferenciaPersonal } from 'src/app/models/ReferenciaPersonal';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.page.html',
  styleUrls: ['./referencias.page.scss'],
})
export class ReferenciasPage implements OnInit {

  itemList: ReferenciaPersonal[] = [];

  tipoReferenciaList: ISelectDTO[] = [
    {
      id: 1,
      text: 'Familiar'
    },
    {
      id: 2,
      text: 'No familiar'
    }
  ];

  idReferencia: number = 1;

  referencia: ReferenciaPersonal = new ReferenciaPersonal();

  constructor(private router: Router, private alertController: AlertController,) { }

  ngOnInit() {
    //if (!Utilidades.validSession()) {
    //  this.router.navigate(['/login']);
    //}
  }

  guardarReferencias() {
    if (this.itemList.length >= 4) {
      this.router.navigate(['/menu'])
    }
    else {
      Utilidades.presentAlert("Advertencia", "Debe ingresar 2 referencias familiares y 2 no familiares");
    }
  }

  addItem() {
    if (this.validaFormulario()) {
      let referenciaAdd: ReferenciaPersonal = new ReferenciaPersonal();

      referenciaAdd.idReferencia = this.idReferencia;
      referenciaAdd.idTipoReferencia = this.referencia.idTipoReferencia;
      referenciaAdd.apellidoPaterno = this.referencia.apellidoPaterno;
      referenciaAdd.apellidoMaterno = this.referencia.apellidoMaterno;
      referenciaAdd.nombre = this.referencia.nombre;
      referenciaAdd.email = this.referencia.email;
      referenciaAdd.telefonoCasa = this.referencia.telefonoCasa;
      referenciaAdd.celular = this.referencia.celular;
      referenciaAdd.txtTipoReferencia = Utilidades.getTextSelectById(this.tipoReferenciaList, referenciaAdd.idTipoReferencia);

      this.idReferencia++;
      this.itemList.push(referenciaAdd);
      this.referencia = new ReferenciaPersonal();
    }
  }

  deleteItem(item) {
    let index = this.itemList.indexOf(item);

    if (index > -1) {
      this.itemList.splice(index, 1);
    }

    this.organizarListItem();
  }

  organizarListItem() {
    this.idReferencia = 1;

    this.itemList.forEach(item => {
      item.idReferencia = this.idReferencia;
      this.idReferencia++;
    });
  }

  validaFormulario(): boolean {

    if (Utilidades.isValidNumber(this.referencia.idTipoReferencia)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un tipo de referencia");
      return false;
    }

    if (Utilidades.isEmpty(this.referencia.apellidoPaterno)) {
      Utilidades.presentAlert("Advertencia", "Ingrese el apellido paterno");
      return false;
    }

    if (Utilidades.isEmpty(this.referencia.apellidoMaterno)) {
      Utilidades.presentAlert("Advertencia", "Ingrese el apellido materno");
      return false;
    }

    if (Utilidades.isEmpty(this.referencia.nombre)) {
      Utilidades.presentAlert("Advertencia", "Ingrese el nombre");
      return false;
    }

    if (Utilidades.isValidEmail(this.referencia.email)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un email valido");
      return false;
    }

    if (Utilidades.isEmpty(this.referencia.telefonoCasa)) {
      Utilidades.presentAlert("Advertencia", "Ingrese el telefono de casa");
      return false;
    }

    if (Utilidades.isEmpty(this.referencia.celular)) {
      Utilidades.presentAlert("Advertencia", "Ingrese el celular");
      return false;
    }

    return true;
  }

}
