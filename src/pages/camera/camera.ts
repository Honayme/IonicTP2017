import { Camera } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})


export class CameraPage {
  public base64Image: string;
  public message : string ;


  constructor(private camera: Camera, private base64ToGallery: Base64ToGallery) {
  }

  takePicture() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;

    }, (err) => {
      console.log(err);
    });

  }


  savePicture() {
    this.message = 'En cours de sauvegarde';
    this.base64ToGallery.base64ToGallery(this.base64Image.replace('data:image/jpeg;base64,', ''), {prefix: '_img'}).then(
      res => this.message = `Enregistre ${res}`,
      err => this.message = `Erreur  ${err}`,
    );
  }


}

