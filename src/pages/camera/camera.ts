import { Camera } from '@ionic-native/camera';
import { Component } from '@angular/core';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})

export class CameraPage {
  public base64Image: string;

  constructor(private camera : Camera) {
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
}
