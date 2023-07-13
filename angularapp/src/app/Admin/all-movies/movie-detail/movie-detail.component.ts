import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  constructor(private router:Router){}
  navigatetoMoviedetails(){
   this.router.navigate(["/allmovies/moviedetail/editmovie"])
  }
  navigatetoReviewmovie(){
    this.router.navigate(["/allmovies/moviedetail/reviewmovie"])
   }
}
