import { Component, OnInit } from '@angular/core';
import { Review } from '../Model/Review';
import { ReviewListserviceService } from '../Services/review-listservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieId: number = 3; //Example movie ID
  review: Review = new Review() ;
  reviews: Review[]=[];

  constructor(private reviewService: ReviewListserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews(this.movieId).subscribe(
      reviews => this.reviews = reviews);
      console.log(this.reviews);
  }



//Button For Review
  gotoReviewForm() {
    this.router.navigateByUrl('ReviewForm');
  }

}
