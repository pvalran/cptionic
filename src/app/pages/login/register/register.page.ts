import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private service: PostServiceService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
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
      this.service.postPetition("credencial/addUser", this.usuario).then(data => {
        Utilidades.presentAlert("", data.message);
        if (data.success) {
          this.router.navigate(['/login']);
        }
      })
        .catch(error => {
          Utilidades.presentAlert("", error.error.message);
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
        });
    }
  }

  validaUsuario(): boolean {

    if (Utilidades.isEmpty(this.usuario.userName)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un nombre de usuario");
      return false;
    }

    if (Utilidades.isValidEmail(this.usuario.email)) {
      Utilidades.presentAlert("Advertencia", "Ingrese un email valido");
      return false;
    }

    if (Utilidades.isEmpty(this.usuario.pass)) {
      Utilidades.presentAlert("Advertencia", "Ingrese una contraseña");
      return false;
    }

    if (this.usuario.pass != this.passConfirmed) {
      Utilidades.presentAlert("Advertencia", "La contraseña no coincide");
      return false;
    }

    return true;
  }
}