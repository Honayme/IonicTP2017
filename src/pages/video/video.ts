import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {CaptureImageOptions, CaptureVideoOptions} from "@ionic-native/media-capture";
import {MediaCapture, MediaFile, CaptureError, CaptureVideoOptions} from '@ionic-native/media-capture';
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
  public message : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  public options: CaptureVideoOptions = {};

  takeVideo() {
    this.mediaCapture.captureVideo(this.options)
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      ), (err) => {
      console.log(err);
      this.message = "camera";

    }


  }


}
