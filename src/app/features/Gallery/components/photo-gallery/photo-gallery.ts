import {Component, inject, signal} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PhotoModel} from '../../models/photo.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.scss'
})
export class PhotoGallery {
  private http = inject(HttpClient);
  photo= signal<PhotoModel[]>([]);
  like:Array<boolean> = new Array<boolean>(20);
  isloading = signal<boolean>(false);

  ngOnInit() {
    this.loadPhoto();
  }
  // Avec async/await
  async loadPhoto() {
    try {
      this.isloading.set(true);
      const photo:PhotoModel[] = await firstValueFrom(
        this.http.get<PhotoModel[]>('https://picsum.photos/v2/list?page=1&limit=20')
      );
      photo.map( photo => {
        photo.like = Math.floor(Math.random() * 500);
      })
      this.like.map( value => value = false);
      this.photo.set(photo);
    }catch (error) {
      console.error(error);
    }finally {
      this.isloading.set(false);
    }


  }
  public toggleLike(photoId:number){
    const test= <PhotoModel>this.photo().find(photo => photo.id == photoId);
    const id = test.id - this.photo()[0].id;
    console.log(test.id);
    if (this.like[id] == true) {
      this.like[id] = false;
      this.photo()[id].like -=1;
    }else {
      this.like[id] = true;
      this.photo()[id].like +=1;
    }

  }

  async refresh() {
    await this.loadPhoto();
  }

}
