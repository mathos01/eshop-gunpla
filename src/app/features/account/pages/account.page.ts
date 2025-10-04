import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-account.page',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Mon compte</h2>
    <nav>
      <a routerLink="profile">Profil</a>
      <a routerLink="orders">Orders</a>
      <a routerLink="admin">Admin</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export default class AccountPage {

}
