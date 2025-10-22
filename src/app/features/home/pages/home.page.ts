import { Component , inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
@Component({
  selector: 'app-home.page',
  imports: [RouterLink],
  template: `
    <div>
        <button [routerLink]="['/product']">entrer dans le store</button>
    </div>
  `,
  styles: `
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }`
})
export default class HomepagePage {
private route = inject(ActivatedRoute);
message = this.route.snapshot.data['message'];
}
