import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  localStorage.setItem("iLoveSalmon", "true");
  const router =  inject(Router);
  const value = localStorage.getItem( "iLoveSalmon");

  if (value == 'true'){
    return true;
  }
  router.navigate(['/error']);
  return false;

};
