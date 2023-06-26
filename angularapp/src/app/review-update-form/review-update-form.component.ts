import { Component, OnInit } from '@angular/core';
import { Review } from '../Model/Review';
import { ReviewServiceService } from '../Services/review-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-update-form',
  templateUrl: './review-update-form.component.html',
  styleUrls: ['./review-update-form.component.css']
})
export class ReviewUpdateFormComponent implements OnInit {

  review: Review = new Review();

  constructor(private reviewService: ReviewServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getReviewById();
  }

  getReviewById() {
    this.reviewService.getReviewById().subscribe(data => {
      // this.review=data;
      console.log(data);
      this.review.id = data.id;
      this.review.movie_id = data.movie_id;
      this.review.user_id = data.user_id;
      this.review.useremail = data.useremail;
      this.review.username = data.username;
      this.review.rating = data.rating;
      this.review.review = data.review;
      this.review.sources = data.sources;
    });
  }


  updateReview() {
    this.reviewService.updateOldReview(this.review).subscribe();
  }


}

// Aishwarya Ghosh
