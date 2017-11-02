import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {CaptureImageOptions, CaptureVideoOptions} from "@ionic-native/media-capture";
import {MediaCapture, MediaFile, CaptureError, CaptureVideoOptions} from '@ionic-native/media-capture';
import {LocalNotifications} from "@ionic-native/local-notifications";
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})

export class VideoPage {
  public path: string;
  public message : string;
  public options : {limit: 1}; // On le nombre de prise à 1 seul

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mediaCapture: MediaCapture,
              private localNotifications: LocalNotifications) {
  }
  //Méthode pour prendre une vidéo
  takeVideo() {
    this.mediaCapture.captureVideo(this.options) //Déclenchement du record de la vidéo
      .then(
        (data: MediaFile[]) => { //Tableau de type mediafile qui contient la vidéo
          this.path = data[0].fullPath; // On récupère le path de la vidéo enregistré sur la téléphone à l'index 0 du mediafile

          this.localNotifications.schedule({
            text: `Vidéo enregistré dans ${this.path}`//On déclenche une notification en indiquant à quelle adresse elle a été uploadé
          })
        },
        (err: CaptureError) => {
          this.localNotifications.schedule({
            text: `Warning ${err}` // On déclenche une notification avec l'erreur
          })
        }
      )
  }


}
