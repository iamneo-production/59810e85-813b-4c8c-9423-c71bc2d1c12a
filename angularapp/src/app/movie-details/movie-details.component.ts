import { Component } from '@angular/core';
import { MovieService } from '../Services/movie-service.service';
import { ReviewServiceService } from '../Services/review-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '../Model/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent{

  movie: Movie =new Movie();
  allMovies:Movie[]=[];

  constructor(private movieService:MovieService ,private reviewform: ReviewServiceService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getMovieDetails(); 
    // this.getMovieById();
    // this.getMovies();
  }


  //Button For Review
  gotoReviewForm(movieid:number,userid:number) {
    this.router.navigateByUrl('ReviewForm');
    this.reviewform.getUserMovieId(movieid,userid)
  }
}
