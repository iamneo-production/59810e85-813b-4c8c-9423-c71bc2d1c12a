import { Component } from '@angular/core';
import { Movie } from '../Model/Movie';
import { MovieService } from '../Services/movie-service.service';
import { Router } from '@angular/router';
import { ReviewServiceService } from '../Services/review-service.service';
import { ReviewListserviceService } from '../Services/review-listservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie: Movie =new Movie();
  allMovies:Movie[]=[];
  userId:number=0;

  constructor(private movieService : MovieService,private RevListservice: ReviewListserviceService , private reviewform: ReviewServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getMovie();
    this.userId=this.movieService.userId;
  }

  private getMovie(){
    this.movieService.getMovieById(Number(localStorage.getItem('movieId'))).subscribe(data=>{
      this.movie = data;
      console.log(this.movie);
    })
  }

  //Button For Review
  gotoReviewForm(movieid:number,userid:number) {
    this.router.navigateByUrl('ReviewForm');
    this.reviewform.getUserMovieId(movieid,userid)
  }

  goToReviewList(movId:number){
    this.router.navigate(['ReviewList',movId]);
    this.RevListservice.getMovieId(movId);
  }

  fetchAllMovies(){
    this.router.navigateByUrl('movies');
  }
}
