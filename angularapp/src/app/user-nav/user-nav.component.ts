import { Component } from '@angular/core';
import { Movie } from '../Model/Movie';
import { MovieService } from '../Services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {

  allMovies:Movie[]=[];
  
  constructor(private movieService:MovieService, private router:Router){}

  fetchAllMovies(){
    this.router.navigateByUrl('movies');
  }
}
