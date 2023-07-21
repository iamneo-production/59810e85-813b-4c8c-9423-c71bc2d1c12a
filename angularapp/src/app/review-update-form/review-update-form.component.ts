import { Component, OnInit } from '@angular/core';
import { Review } from '../Model/Review';
import { ReviewServiceService } from '../Services/review-service.service';
import { Router } from '@angular/router';
import { ReviewListserviceService } from '../Services/review-listservice.service';

@Component({
  selector: 'app-review-update-form',
  templateUrl: './review-update-form.component.html',
  styleUrls: ['./review-update-form.component.css']
})
export class ReviewUpdateFormComponent implements OnInit {

  review: Review = new Review();
  ratingnum:number=0;
  constructor(private reviewService: ReviewServiceService,private RevListservice: ReviewListserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getReviewById();
  }

  getReviewById() {
    this.reviewService.getReviewById().subscribe(data => {
      // this.review=data;
      console.log(data);
      this.review.id = data.id;
      this.review.movieId = data.movieId;
      this.review.userId = data.userId;
      this.review.date=data.date;
      this.ratingnum=Number(data.rating);
      this.review.rating = data.rating;
      this.review.reviewNote = data.reviewNote;
      this.review.source = data.source;
    });
  }


  updateReview() {
    this.review.rating=this.ratingnum.toString();
    this.reviewService.updateOldReview(this.review).subscribe();
    alert("Your Form is updated./nBack to Review list to see your Update")
  }


  goToReviewList(movId:number){
    this.router.navigate(['ReviewList',movId]);
    this.RevListservice.getMovieId(movId);
  }
}

// Aishwarya Ghosh