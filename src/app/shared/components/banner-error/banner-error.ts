import {Component, inject} from '@angular/core';
import {ErrorService} from '../../../core/services/error.service';

// shared/components/banner-error.ts
@Component({
  selector: 'banner-error',
  template: `
    @if (error()) {
      <div class="banner">{{ error() }}</div>
    }
  `,
  styles: [`.banner { position:fixed; top:0; width:100%; background:darkred; color:white; }`]
})
export class BannerError {
  error = inject(ErrorService).error;
}
