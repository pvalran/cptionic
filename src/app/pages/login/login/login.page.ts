import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  urlLogin: string = "https://64.225.45.9:90/credencial/login";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private service: PostServiceService
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
    this.router.navigate(['/home']);
    /*
    this.service.postPetition(this.urlLogin, this.login).then(data => {
      Utilidades.presentAlert("", data.message);
      if (data.success) {
        let token: Token = new Token(data.data);
        sessionStorage.setItem('login', JSON.stringify(token));
        this.router.navigate(['/home']);
      }
    }).catch(error => {
      Utilidades.presentAlert("", error.message);
      console.log(error.status);
      console.log(error.error);
      console.log(error.headers);
    });
    */
  }

  registrarNuevoUsuario() {
    this.router.navigate(['/register'])
  }

  //prueba
  html: string = "<img src='../../../assets/img/informacionFondo.png'/>"
  async recuperarContrasena() {
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
    await alert.present();
  }
}