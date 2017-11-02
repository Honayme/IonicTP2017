import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import {MediaCapture} from "@ionic-native/media-capture";
import { LocalNotifications } from "@ionic-native/local-notifications";

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  providers: [ // Ajout des provider pour la capture de la vidéo et des notif
    MediaCapture,
    LocalNotifications
  ]
})
export class VideoPageModule {}
