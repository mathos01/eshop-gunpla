import {Component, inject} from '@angular/core';
import {Notification} from '../../services/notification';

@Component({
  selector: 'app-banner-notify',
  imports: [],
  template: `
    @if (notify()){
      <div class="banner"> {{notify()}}</div>
    }
  `,
  styles: [`.banner { position:fixed; top:0; width:100%; background:greenyellow; color:black; }`]
})
export class BannerNotify {
  notify = inject(Notification).notification;
}
