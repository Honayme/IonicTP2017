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
  public options : {limit: 1}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mediaCapture: MediaCapture,
              private localNotifications: LocalNotifications) {
  }

  takeVideo() {
    this.mediaCapture.captureVideo(this.options)
      .then(
        (data: MediaFile[]) => {
          this.path = data[0].fullPath;

          this.localNotifications.schedule({
            text: `Vidéo enregistré dans ${this.path}`
          })
        },
        (err: CaptureError) => {
          this.localNotifications.schedule({
            text: `Warning ${err}`
          })
        }
      )
  }


}
