import { Component, OnInit } from '@angular/core';
import { Review } from '../Model/Review';
import { ReviewListserviceService } from '../Services/review-listservice.service';
import { Router } from '@angular/router';
import { ReviewServiceService } from '../Services/review-service.service';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieId: number = 3; //Example movie ID
  review: Review = new Review() ;
  reviews: Review[]=[];

  constructor(private reviewService: ReviewListserviceService, private reviewform: ReviewServiceService,private router:Router) { 
  }

  ngOnInit(): void {
    this.getReviews();
    this.reviewService.movieId=this.movieId;
  }

  getReviews(): void {
    this.reviewService.getReviews( ).subscribe(
      reviews => this.reviews = reviews);
      console.log(this.reviews);
      this.reviewService.movieId=this.movieId;
      console.log(this.reviewService.movieId);
  }



//Button For Review
  gotoReviewForm(movieid:number,userid:number) {
    this.router.navigateByUrl('ReviewForm');
    this.getReviews();
    this.reviewform.getUserMovieId(movieid,userid);
  }

//Button for Update
gotoUpdateForm(id:number){
  this.router.navigate(['ReviewUpdate',id]);
  this.reviewform.getId(id);
}

//Button for Delete
deleteReview(reviewId: number,movieId:number) {
  const confirmed=window.confirm('Are you sure you ant to delete this review?');
  if(confirmed){
    // this.reviewService.deleteReview(reviewId).subscribe(() => {
    //   this.reviews = this.reviews.filter(review => review.id !== reviewId);
    // this.reviewform.getId(reviewId);
    // this.reviewform.getReviewById().subscribe((data) => {
    //   this.review=data;
    // });
    this.reviewService.deleteReview(reviewId).subscribe();
    this.router.getCurrentNavigation();
    // this.router.navigate(['ReviewList',movieId]);
    this.reviewService.getMovieId(movieId);
    };
  }
}

