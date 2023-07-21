import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../Services/movie-service.service';
import { Movie } from '../Model/Movie';

@Component({
  selector: 'app-movielist-navbar',
  templateUrl: './movielist-navbar.component.html',
  styleUrls: ['./movielist-navbar.component.css']
})
export class MovielistNavbarComponent {

  constructor(private movieService:MovieService, private router:Router){}


  movie: Movie =new Movie();
  allMovies:Movie[]=[];

  fetchAllMovies(){
    this.router.navigateByUrl("/movies");
  }



 

}
