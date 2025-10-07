import {FormControl} from '@angular/forms';

export type LoginFormModel = {
  userName: FormControl<string>;
  password: FormControl<string>;
}
