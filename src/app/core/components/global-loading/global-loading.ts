import {Component, inject} from '@angular/core';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-global-loading',
  imports: [],
  templateUrl: './global-loading.html',
  styleUrl: './global-loading.scss'
})
export class GlobalLoading {
  loading = inject(LoadingService).isLoading;
}
