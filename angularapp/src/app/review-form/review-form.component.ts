import { Component } from '@angular/core';
import { Review } from '../Model/Review';
import { Router } from '@angular/router';
import { ReviewServiceService } from '../Services/review-service.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  reviewForm : Review = new Review();

  constructor(private reviewService: ReviewServiceService, private router: Router){}

  addNewReview(){
    console.log(this.reviewForm);
    this.reviewService.addNewReview(this.reviewForm).subscribe();
  }

}
// Aishwarya Ghosh