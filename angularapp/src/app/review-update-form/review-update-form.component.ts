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
    // this.getReviewById();
  }

  getReviewById(revId:number) {
    this.reviewService.getReviewById(revId).subscribe(data => {
      // this.review=data;
      console.log(data);
      this.review.id = data.id;
      this.review.movieId = data.movieId;
      this.review.userId = data.userId;
      this.review.date=data.date;
      this.review.rating = data.rating;
      this.review.reviewNote = data.reviewNote;
      this.review.source = data.source;
    });
  }


  updateReview() {
    this.reviewService.updateOldReview(this.review).subscribe();
    alert("Your Form is updated./nBack to Review list to see your Update")
  }


}

// Aishwarya Ghosh
