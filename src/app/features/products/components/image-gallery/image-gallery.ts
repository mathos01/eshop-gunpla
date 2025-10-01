import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss'
})
export class ImageGallery {
  currentImage = 'https://static.wikia.nocookie.net/gundam/images/2/29/RfV_Mecha_MS-06F_Zaku_II_F-01_Solari_p01_design_front_20241118.jpg/';
  imageDescription = 'Image de démonstration';
  isLoading = false;
  isSelected = true;
  searchTerm = '';
  placeholderText = 'Rechercher une image...';
}
