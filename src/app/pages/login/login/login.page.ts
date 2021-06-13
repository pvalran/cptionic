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

  login = {
    user: '',
    password: ''
  };

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
    this.service.postPetition("credencial/login", this.login).then(data => {
      if (data.success) {
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
  }

  registrarNuevoUsuario() {
    this.router.navigate(['/register'])
  }

  //prueba

  async recuperarContrasena() {
    /*let html: string = "<img src='../../../assets/img/informacionFondo.png'/>"
      const alert = await this.alertController.create({
      cssClass: 'custom-alertDanger',
      //header: 'Confirm!',
      message: this.html,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();*/
  }
}