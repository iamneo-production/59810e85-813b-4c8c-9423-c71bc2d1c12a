import { Component, OnInit } from '@angular/core';
import { Review } from '../Model/Review';
import { ReviewListserviceService } from '../Services/review-listservice.service';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieId: number = 1; //Example movie ID
  review: Review = new Review() ;
  allReviews: Review[]=[];

  constructor(private reviewService: ReviewListserviceService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews(this.movieId)
      .subscribe(reviews => this.review = reviews);
      console.log(this.review);
  }
}
