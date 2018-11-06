import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: SafeResourceUrl;
  photo;

  constructor(
    private sanitizer: DomSanitizer) {
  }

  takePicture() {

    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }).then(
      (data) => {
      this.photo = data;
      }, (err) => {
        this.photo = 'Could not take photo';
      }
      );

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    // this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));
  }
}
