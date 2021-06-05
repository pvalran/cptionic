import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';

import { DependientesEconomicos } from 'src/app/models/DependientesEconomicos';
import { Utilidades } from 'src/app/service/utilidades'

@Component({
  selector: 'app-dependienteseconomicos',
  templateUrl: './dependienteseconomicos.page.html',
  styleUrls: ['./dependienteseconomicos.page.scss'],
})
export class DependienteseconomicosPage implements OnInit {

  itemList: DependientesEconomicos[] = [];

  parentescoList: ISelectDTO[] = [
    {
      id: 1,
      text: 'Esposo(a)'
    },
    {
      id: 2,
      text: 'Hijo'
    }
  ];

  ocupacionList: ISelectDTO[] = [
    {
      id: 1,
      text: 'Ama de casa'
    },
    {
      id: 2,
      text: 'Estudiante'
    },
    {
      id: 3,
      text: 'Empleado'
    }
  ];

  idDependiente: number = 1;

  dependiente: DependientesEconomicos = new DependientesEconomicos();

  constructor(private router: Router, private alertController: AlertController,) { }

  ngOnInit() {
    this.router.navigate(['/home']);
    //if (!Utilidades.validSession()) {
    //  this.router.navigate(['/login']);
    //}
  }

  guardarAdicionales() {
    this.router.navigate(['/menu'])
  }

  addItem() {
    if (this.validaFormulario()) {
      let dependienteAdd: DependientesEconomicos = new DependientesEconomicos();

      dependienteAdd.idDependiente = this.idDependiente;
      dependienteAdd.edad = this.dependiente.edad;
      dependienteAdd.idParentesco = this.dependiente.idParentesco;
      dependienteAdd.idOcupacion = this.dependiente.idOcupacion;
      dependienteAdd.txtOcupacion = Utilidades.getTextSelectById(this.ocupacionList, dependienteAdd.idOcupacion);
      dependienteAdd.txtParentesco = Utilidades.getTextSelectById(this.parentescoList, dependienteAdd.idParentesco);

      this.idDependiente++;
      this.itemList.push(dependienteAdd);
      this.dependiente = new DependientesEconomicos();
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
    this.idDependiente = 1;

    this.itemList.forEach(item => {
      item.idDependiente = this.idDependiente;
      this.idDependiente++;
    });
  }

  validaFormulario(): boolean {

    if (Utilidades.isValidNumber(this.dependiente.edad)) {
      Utilidades.presentAlert("Advertencia", "Ingrese una edad valida");
      return false;
    }

    if (Utilidades.isValidNumber(this.dependiente.idParentesco)) {
      Utilidades.presentAlert("Advertencia", "Seleccione un parentesco");
      return false;
    }

    if (Utilidades.isValidNumber(this.dependiente.idOcupacion)) {
      Utilidades.presentAlert("Advertencia", "Seleccione una ocupacion");
      return false;
    }

    return true;
  }

}
