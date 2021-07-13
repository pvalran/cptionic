import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Token } from 'src/app/models/Token';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
//BORRAR ALERT CONTROLER
export class LoginPage implements OnInit {

  emailRecuperar: string;
  validEmail: boolean = false;

  login = {
    user: '',
    password: ''
  };

  styleIcon = {
    color: "danger",
    icon: "close"
  }

  constructor(
    private router: Router,
    private service: PostServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.login = {
      user: '',
      password: ''
    };
  }

  iniciarSesion() {

    this.navCtrl.navigateRoot('/home', { animated: true });

    /*
    let body = new URLSearchParams();
    body.set('username', this.login.user);
    body.set('password', this.login.password);
    body.set('grant_type', 'password');

    this.service.postPetition("oauth/token", body).then(data => {
      if (data.result) {
        let token: Token = new Token(data.data);
        this.service.guardarToken(token.token);
        this.service.validaToken();
        this.navCtrl.navigateRoot('/home', { animated: true });
      }
    }).catch(error => {
      this.service.limpiaToken();
      Utilidades.presentAlert("", error.message);
      console.log(error);
    });
    */
  }

  registrarNuevoUsuario() {
    this.router.navigate(['/register'])
  }

  validaEmail(event) {
    this.validEmail = !Utilidades.isValidEmail(event.detail.value);

    if (this.validEmail) {
      this.styleIcon.color = "success";
      this.styleIcon.icon = "checkmark";
    } else {
      this.styleIcon.color = "danger";
      this.styleIcon.icon = "close";
    }
  }

  recuperar() {
    if (this.validEmail) {
      const formRec: any = document.getElementById('divFormRecuperar');
      formRec.style.display = "none";
      const formRec2: any = document.getElementById('divRecuperado');
      formRec2.style.display = "block";
    }
  }

  recuperarContrasena() {
    const formRec: any = document.getElementById('divRecuperado');
    formRec.style.display = "none";
    const modal: any = document.querySelector('.my-modal');
    modal.showModal();
  }

  cerrarModal() {
    const modal: any = document.querySelector('.my-modal');
    modal.close();
    const formRec: any = document.getElementById('divFormRecuperar');
    formRec.style.display = "block";
    const formRec2: any = document.getElementById('divRecuperado');
    formRec2.style.display = "none";
    this.emailRecuperar = "";
  }
}
