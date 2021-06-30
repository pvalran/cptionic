import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PostServiceService } from 'src/app/service/post-service.service';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  usuario = {
    username: '',
    email: '',
    password: '',
    idCategory: [1]
  };

  passConfirmed: string;

  constructor(
    private navCtrl: NavController,
    private service: PostServiceService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.usuario = {
      username: '',
      email: '',
      password: '',
      idCategory: []
    };
    this.passConfirmed = '';
  }

  registrarUsuario() {
    if (this.validaUsuario()) {
      this.service.postPetition("user/user/create", this.usuario).then(data => {
        Utilidades.presentAlert("", data.message);
        if (data.result) {
          this.navCtrl.navigateRoot('/login', { animated: true });
        }
      })
        .catch(error => {
          Utilidades.presentAlert("", error.message);
          console.log(error);
        });
    }
  }

  validaUsuario(): boolean {

    if (Utilidades.isEmpty(this.usuario.username)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un nombre de usuario");
      return false;
    }

    if (Utilidades.isValidEmail(this.usuario.email)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un email valido");
      return false;
    }

    if (Utilidades.isEmpty(this.usuario.password)) {
      Utilidades.presentAlert("Advertencia", "Ingrese una contraseña");
      return false;
    }

    if (this.usuario.password != this.passConfirmed) {
      Utilidades.presentAlert("Advertencia", "La contraseña no coincide");
      return false;
    }

    return true;
  }
}