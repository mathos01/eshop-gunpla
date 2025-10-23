import {Routes} from '@angular/router';
import {productListResolver} from './resolvers/product-list-resolver';
import {authGuard} from './guards/auth-guard';
import {productResolver} from './resolvers/product-resolver';

export const routes: Routes = [
  //ma page d'accueil
  {path: '', loadComponent: () => import("../features/home/pages/home.page")},
  //photo gallery
  {path: 'photoGallery', loadComponent: () => import("../features/Gallery/pages/photo-gallery.page")},
  //ma liste d'user
  {path: 'userlist', loadComponent: () => import("../features/user/pages/user.page")},
  //mon magasin
  {path: 'product', loadComponent: () => import("../features/products/pages/product.page"),resolve:{products : productListResolver}},
  {path: 'product/:id', loadComponent: () => import("../features/products/pages/product-detail.page"),resolve:{product : productResolver}},
  {path: 'cart', loadComponent: () => import("../features/products/pages/cart.page")},
  //manager de compte
  {path:'account',
  loadComponent: () => import('../features/account/pages/account.page'),
  children:[
    {path:'profile', loadComponent: () => import('../features/account/pages/profile.page'),},
    {path:'orders', loadComponent: () => import('../features/account/pages/orders.page'),},
    {path:'admin', loadComponent: () => import('../features/account/pages/admin.page'), canActivate:[authGuard]},
  ]
  },
  //les pages d'authentification.
  {path:"login", loadComponent: () => import("../features/auth/login/pages/login.page"),},
  {path:"register", loadComponent: () => import("../features/auth/register/pages/register.page"),},
  //les pages de mon core , about/settings/error
  {path:'about',loadComponent: () => import('../core/pages/about.page'),},
  {path:'settings',loadComponent: () => import('../core/pages/setting.page'),},
  {path:'error' ,loadComponent: () => import('../core/pages/error.page'),},
  {path:'**', redirectTo: 'error'},

];
