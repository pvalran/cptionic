import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Token } from 'src/app/models/Token';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  login = {
    user: '',
    password: ''
  };

  lLoginIsValid: boolean = false;
  urlLogin: string = "http://64.225.45.9:90/credencial/login";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private service: PostServiceService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.lLoginIsValid = false;
    this.login = {
      user: '',
      password: ''
    };
  }

  iniciarSesion() {
    this.service.postPetition(this.urlLogin, this.login).then(data => {
      let token: Token = new Token(data.data);
      sessionStorage.setItem('login', JSON.stringify(token));
      this.lLoginIsValid = true;
      this.presentAlert("", data.message);
    })
      .catch(error => {
        this.presentAlert("", error.error.message);
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }

  registrarNuevoUsuario() {
    this.router.navigate(['/register'])
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
            if (this.lLoginIsValid) {
              this.router.navigate(['/home']);
            }
          }
        }]
    });
    await alert.present();
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