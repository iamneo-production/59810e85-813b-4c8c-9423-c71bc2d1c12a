import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Model/Movie';
import { MovieService } from 'src/app/Services/movie-service.service';
import { ReviewListserviceService } from 'src/app/Services/review-listservice.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent {
  movie: Movie =new Movie();
  allMovies:Movie[]=[];
  

  constructor(private movieService : MovieService,private RevListservice: ReviewListserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie(){
    this.movieService.getMovieById(Number(localStorage.getItem('movieId'))).subscribe(data=>{
      this.movie = data;
      console.log(this.movie);
    })
  }

  navigatetoEditmovie(id:number){
   this.router.navigate(["/all-movies/movie-detail/edit-movie",id]);
  }
  
  navigatetoAdminReviewList(id:number){
    this.router.navigate(["all-movies/movie-detail/admin-review-list"]);
    this.RevListservice.getMovieId(id);
  }

  navigatetoAllMovies(){
    this.router.navigate(["all-movies"]);
  }
}

