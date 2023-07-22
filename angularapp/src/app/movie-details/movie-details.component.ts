import { Component } from '@angular/core';
import { Movie } from '../Model/Movie';
import { MovieService } from '../Services/movie-service.service';
import { Router } from '@angular/router';
import { ReviewServiceService } from '../Services/review-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie: Movie = {
    id: 0,
    title: '',
    rating: '',
    cast: '',
    plotSummary: '',
    genre: '',
    releaseDate: new Date(),
  };

  constructor(private movieService : MovieService, private reviewform: ReviewServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getMovie();
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
}
