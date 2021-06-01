import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeclaracionInicial } from 'src/app/models/DeclaracionInicial';
import { Utilidades } from 'src/app/service/utilidades'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  emailConfirm: string;
  aceptDelcaracion: boolean = false;
  validCaptureNIP = false;
  declaracion: DeclaracionInicial = new DeclaracionInicial();

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
   // if (!Utilidades.validSession()) {
   //   this.router.navigate(['/login']);
   // }
  }

  enviarNIP() {
    debugger
    if (this.aceptDelcaracion) {
      if (this.validaFormulario()) {
        console.log("Solicitar PIN");
      }
    } else {
      Utilidades.presentAlert("", "Debe aceptar la declaracion inicial");
    }
  }

  validaFormulario(): boolean {
    if (Utilidades.isValidEmail(this.declaracion.email)) {
      Utilidades.presentAlert("Advertencia", "Agregue un email valido")
      return false;
    }

    if (this.declaracion.email != this.emailConfirm) {
      Utilidades.presentAlert("Advertencia", "Los correos no coinciden")
      return false;
    }
    return true;
  }

  guardarDeclaracionInicial() {
    //if (this.validCaptureNIP) {
      this.router.navigate(['/captureid']);
    //}
  }
}
