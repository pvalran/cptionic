import { Component, DebugEventListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { PostServiceService } from 'src/app/service/post-service.service';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.page.html',
  styleUrls: ['./personalinformation.page.scss'],
})
export class PersonalinformationPage implements OnInit {

  personalInformation = {
    apellidoPaterno: null,
    apellidoMaterno: null,
    nombre: null,
    fechaNacimiento: null,
    CURP: null,
    RFC: null,
    edad: null,
    estadoNacimiento: null,
    genero: null,
    email: null,
    calleNumero: null,
    CP: null,
    colonia: null,
    ciudad: null,
    municipio: null,
    estado: null
  };
  lstGenero: any[] = [];
  isDisabled: boolean = true;

  constructor(
    private service: PostServiceService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.service.getPetition("customer/gender/all").subscribe(
      result => {
        if(result.data.length > 0){
          result.data.forEach(element => {
            this.lstGenero.push(element)
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  guardarPersonalInformation() {
    this.navCtrl.navigateRoot('/documentos', { animated: true });
    //if (this.validateForm()) {
    //  this.navCtrl.navigateRoot('/documentos', { animated: true });
    //}
  }

  obtenerDatosCP() {
    if (!Utilidades.isValidNumber(this.personalInformation.CP)) {
      this.isDisabled = false;

      let url: string = "directions/getByCP/" + this.personalInformation.CP;

      this.service.getPetition("user/all").subscribe(
        result => {
          this.personalInformation.colonia = result.data;
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  validateForm(): boolean {
    let validateInput: string = "";

    if (Utilidades.isEmpty(this.personalInformation.apellidoPaterno))
      validateInput = "Ingrese el apellido paterno";

    if (Utilidades.isEmpty(this.personalInformation.apellidoMaterno))
      validateInput = "Ingrese el apellido materno";

    if (Utilidades.isEmpty(this.personalInformation.nombre))
      validateInput = "Ingrese el apellido nombre";

    if (Utilidades.isEmpty(this.personalInformation.fechaNacimiento))
      validateInput = "Ingrese la fecha de nacimiento";

    if (Utilidades.isEmpty(this.personalInformation.CURP))
      validateInput = "Ingrese el CURP";

    if (Utilidades.isEmpty(this.personalInformation.RFC))
      validateInput = "Ingrese el RFC";

    if (Utilidades.isValidNumber(this.personalInformation.edad))
      validateInput = "Ingrese la edad";

    if (Utilidades.isValidNumber(this.personalInformation.estadoNacimiento))
      validateInput = "Ingrese el estado de nacimiento";

    if (Utilidades.isValidNumber(this.personalInformation.genero))
      validateInput = "Ingrese el genero";

    if (Utilidades.isValidEmail(this.personalInformation.email))
      validateInput = "Ingrese un email valido";

    if (Utilidades.isEmpty(this.personalInformation.calleNumero))
      validateInput = "Ingrese una calle y numero";

    if (Utilidades.isValidNumber(this.personalInformation.CP))
      validateInput = "Ingrese un codigo postal";

    if (Utilidades.isValidNumber(this.personalInformation.colonia))
      validateInput = "Ingrese una colonia";

    if (Utilidades.isValidNumber(this.personalInformation.ciudad))
      validateInput = "Ingrese una ciudad";

    if (Utilidades.isValidNumber(this.personalInformation.municipio))
      validateInput = "Ingrese un municipio";

    if (Utilidades.isValidNumber(this.personalInformation.estado))
      validateInput = "Ingrese un estado";

    if (validateInput != "") {
      Utilidades.presentAlert("Advertencia", validateInput);
      return false;
    }

    return true;
  }

}
