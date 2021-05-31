import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  usuario = {
    userName: '',
    email: '',
    pass: '',
    categoryUser: { category_id: 2 }
  };

  passConfirmed: string;
  lCreateCount: boolean = false;
  urlAddUser: string = "http://64.225.45.9:90/credencial/addUser";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private service: PostServiceService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.lCreateCount = false;
    this.usuario = {
      userName: '',
      email: '',
      pass: '',
      categoryUser: { category_id: 2 }
    };
    this.passConfirmed = '';
  }

  registrarUsuario() {

    if (this.validaUsuario()) {
      this.service.postPetition(this.urlAddUser, this.usuario).then(data => {
        this.lCreateCount = true;
        this.presentAlert("", data.message);
      })
        .catch(error => {
          this.presentAlert("", error.error.message);
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
        });
    }
  }

  validaUsuario(): boolean {

    if (Utilidades.isEmpty(this.usuario.userName)) {
      this.presentAlert("Advertencia", "Ingrese un nombre de usuario");
      return false;
    }

    if (Utilidades.isValidEmail(this.usuario.email)) {
      this.presentAlert("Advertencia", "Ingrese un email valido");
      return false;
    }

    if (Utilidades.isEmpty(this.usuario.pass)) {
      this.presentAlert("Advertencia", "Ingrese una contraseña");
      return false;
    }

    if (this.usuario.pass != this.passConfirmed) {
      this.presentAlert("Advertencia", "La contraseña no coincide");
      return false;
    }

    return true;
  }

  async presentAlert(header: string, mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: mensaje,
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            if (this.lCreateCount) {
              this.router.navigate(['/login']);
            }
          }
        }]
    });
    await alert.present();
  }
}
