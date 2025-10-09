import {Component, inject, input, output} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ReviewFormModel} from '../../models/reviewForm.model';
import {Review} from '../../models/Review.model';


@Component({
  selector: 'app-rating-form',
  imports: [ReactiveFormsModule],
  templateUrl: './rating-form.html',
  styleUrl: './rating-form.scss'
})
export class RatingForm {
  private fb = inject(NonNullableFormBuilder);
  ratingFormSubmitted = output<Review>();

  productId = input<number>();


  ratingForm: FormGroup<ReviewFormModel> = this.fb.group({
    rating: this.fb.control( 1, [Validators.required, Validators.min(0), Validators.max(5)]),
    comment: this.fb.control('', [Validators.required])
  });


  //method
  onSubmit(): void {
    const formData = {ProductId:this.productId(),rating: this.ratingForm.value.rating, comment:this.ratingForm.value.comment,date:17 };
    this.ratingFormSubmitted.emit(<Review>formData);
  }
}
