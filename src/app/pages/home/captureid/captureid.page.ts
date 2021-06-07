import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';

@Component({
  selector: 'app-captureid',
  templateUrl: './captureid.page.html',
  styleUrls: ['./captureid.page.scss'],
})
export class CaptureidPage implements OnInit {

  lstDocumentoIndentidad: ISelectDTO[] = [
    {
      id: 1,
      text: 'Credencial de elector'
    },
    {
      id: 2,
      text: 'Pasaporte'
    }
  ];

  constructor(private router: Router, private camera: Camera) { }

  ngOnInit() {
    //document.getElementById("file-input-anverso").addEventListener('change', (event) => {
    //  debugger;
     // const resultado = document.querySelector('.resultado');
      //resultado.textContent = `Te gusta el sabor ${event.target.value}`;
    //});
  }

  useCamara(idInput: string) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      //Si no es un celular usa el input file
      if (err == "cordova_not_available") {
        document.getElementById(idInput).click();
      }
    });
  }

  guardarIdCapture() {
    this.router.navigate(['/personalinformation'])
  }
}
