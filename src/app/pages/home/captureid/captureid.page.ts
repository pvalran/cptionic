import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';

import { ISelectDTO } from 'src/app/interfaces/ISelectDTO';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Utilidades } from 'src/app/service/utilidades';

@Component({
  selector: 'app-captureid',
  templateUrl: './captureid.page.html',
  styleUrls: ['./captureid.page.scss'],
})


export class CaptureidPage implements OnInit {
  @ViewChild('fileInputAnverso') anverso: ElementRef;
  @ViewChild('fileInputReverso') reverso: ElementRef;

  tipoDocumento: number = null;
  file: File;
  filedirs: any[] = [];
  lstDocumentoIndentidad: any[]= [];

  constructor(
    private camera: Camera,
    private render2: Renderer2,
    private navCtrl: NavController,
    private service: PostServiceService
  ) { }


  ngOnInit() {
    this.service.getPetition("documents/type/getByClass/1").subscribe(
      result => {
        if(result.data.length > 0) {
          result.data.forEach(element => {
            this.lstDocumentoIndentidad.push(element)
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
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
        let inputSelect;
        if (idInput == "fileInputAnverso")
          inputSelect = this.anverso.nativeElement;
        if (idInput == "fileInputReverso")
          inputSelect = this.reverso.nativeElement;

        inputSelect.click();
      }
    });
  }

  useScaner() {

  }

  guardarIdCapture() {
    //if (this.validateForm()) {
    //Guardar los datos
    this.navCtrl.navigateRoot('/personalinformation', { animated: true });
    //}

  }

  validateForm(): boolean {
    let validateInput: string = "";
    let fileInputAnverso = this.anverso.nativeElement;
    let fileInputReverso = this.reverso.nativeElement;
    //USAR RENDER2 PARA SETEAR VALUES
    //this.render2.setValue(fileInputAnverso, 'Valor')

    if (Utilidades.isValidNumber(this.tipoDocumento))
      validateInput = "Seleccione el tipo de documento";

    if (Utilidades.isEmpty(fileInputAnverso.value))
      validateInput = "Ingrese la fotografia del anverso del documento";

    if (Utilidades.isEmpty(fileInputReverso.value))
      validateInput = "Ingrese la fotografia del reverso del documento";

    if (validateInput != "") {
      Utilidades.presentAlert("Advertencia", validateInput);
      return false
    }

    return true;
  }
}
