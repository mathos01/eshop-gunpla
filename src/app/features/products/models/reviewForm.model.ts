import {FormControl} from '@angular/forms';

export type ReviewFormModel = {
  rating: FormControl<number>;
  comment: FormControl<string>;
}
