import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  constructor(private router:Router){}

  navigatetoMoviedetail(){
    this.router.navigate(["/movie-detail"])
   }
  // navigatetoMoviedetails(){
  //   this.router.navigate(["/allmovies/moviedetail/editmovie"])
  //  }
  //  navigatetoReviewmovie(){
  //    this.router.navigate(["/allmovies/moviedetail/reviewmovie"])
  //   }
}
