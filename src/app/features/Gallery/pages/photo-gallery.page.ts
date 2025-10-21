import { Component } from '@angular/core';
import {PhotoGallery} from '../components/photo-gallery/photo-gallery';

@Component({
  selector: 'app-photo-gallery.page',
  imports: [
    PhotoGallery
  ],
  template: `
    <app-photo-gallery></app-photo-gallery>
  `,
  styles: ``
})
export default class PhotoGalleryPage {

}
