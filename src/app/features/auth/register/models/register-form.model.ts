// profile-form.model.ts
import {FormArray, FormControl} from '@angular/forms';

export type RegisterFormModel = {
  userName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  adresses: FormArray<FormControl<string>>;
  confirmPassword: FormControl<string>;
  phone: FormControl<string>;
}
