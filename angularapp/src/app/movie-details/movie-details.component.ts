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


  movie: Movie =new Movie();
  allMovies:Movie[]=[];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
  }
}
