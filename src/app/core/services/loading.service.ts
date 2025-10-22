import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal<boolean>(false);

  start(){
    this.isLoading.set(true);
  }
  stop(){
    this.isLoading.set(false);
  }
}
