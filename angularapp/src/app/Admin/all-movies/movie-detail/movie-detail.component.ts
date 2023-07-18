import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  constructor(private router:Router){}
  navigatetoEditmovie(){
   this.router.navigate(["all-movies/movie-detail/edit-movie"])
  }
  navigatetoReviewmovie(){
    this.router.navigate([""])
   }
}
