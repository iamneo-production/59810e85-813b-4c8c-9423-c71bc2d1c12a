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
  }

  getReviews(): void {
    this.reviewService.getReviews( ).subscribe(
      reviews => this.reviews = reviews);
      console.log(this.reviews);
  }



//Button For Review
  gotoReviewForm(movieid:number,userid:number) {
    this.router.navigateByUrl('ReviewForm');
    this.reviewform.getUserMovieId(movieid,userid)
  }

<<<<<<< HEAD
}
=======
//Button for Update
gotoUpdateForm(id:number){
  this.router.navigate(['ReviewUpdate',id]);
  this.reviewform.getId(id);
}

}
>>>>>>> dcb09f0db326cd9579e05298fb492ab919934001
