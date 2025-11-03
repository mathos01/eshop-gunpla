import { Component , inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
@Component({
  selector: 'app-home.page',
  imports: [RouterLink],
  template: `
    <div>
      <H1>Gunpla shop</H1>
      <a [routerLink]="['/product']">entrer dans le store</a>
    </div>
  `,
  styles: `
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }`
})
export default class HomepagePage {
private route = inject(ActivatedRoute);
message = this.route.snapshot.data['message'];
}
