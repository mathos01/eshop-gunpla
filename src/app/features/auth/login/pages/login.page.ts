import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginFormModel} from '../models/login-form.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login.page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export default class LoginPage {
  private fb = inject(NonNullableFormBuilder);

  loginForm: FormGroup<LoginFormModel> = this.fb.group({
    userName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    password: this.fb.control('', [Validators.required])
  });
}
