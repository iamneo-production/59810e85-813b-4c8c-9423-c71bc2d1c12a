import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/Model/Review';
import { MovieService } from 'src/app/Services/movie-service.service';
import { ReviewListserviceService } from 'src/app/Services/review-listservice.service';

@Component({
  selector: 'app-admin-review-list',
  templateUrl: './admin-review-list.component.html',
  styleUrls: ['./admin-review-list.component.css']
})
export class AdminReviewListComponent implements OnInit {
  movieId: number = 3; //Example movie ID
  review: Review = new Review() ;
  reviews: Review[]=[];
  userId:number=0;

  
  constructor(private reviewService: ReviewListserviceService,private movie:MovieService){}


  ngOnInit(): void {
    this.getReviews();
    this.reviewService.movieId=this.movieId;
    this.userId=this.movie.userId;
  }

  getReviews(): void {
    this.reviewService.getReviews( ).subscribe(
      reviews => this.reviews = reviews);
      console.log(this.reviews);
      this.reviewService.movieId=this.movieId;
      console.log(this.reviewService.movieId);
  }
}
