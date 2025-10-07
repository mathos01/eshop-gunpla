// profile-form.page.ts
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  NonNullableFormBuilder,
  FormArray,
  FormControl
} from '@angular/forms';
import { RegisterFormModel } from '../models/register-form.model';
import {passwordMatchValidator} from '../Validator/password-match.validator';


@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: '/register.page.html',
  styleUrls: ['/register.page.scss']
})
export default class RegisterForm {
  protected fb = inject(NonNullableFormBuilder);
  adresse = this.fb.array([
    this.fb.control('', Validators.required)
  ]);

  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    userName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    email: this.fb.control('',[Validators.required, Validators.email]),
    adresses: this.adresse,
    password: this.fb.control('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)]), //, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/)
    confirmPassword: this.fb.control('',Validators.required),
    phone: this.fb.control('', [Validators.pattern(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/)]),
  }, { validators: [passwordMatchValidator] });
}
