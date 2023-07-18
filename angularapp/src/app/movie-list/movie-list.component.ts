import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Model/Movie';
import { MovieService } from '../Services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

 

  constructor(private movieService:MovieService, private router:Router){}


  searchTerm:string="";
  movie: Movie =new Movie();
  allMovies:Movie[]=[];

  //@Output() searchEvent = new EventEmitter<string>();


  /*search():void{
    this.searchEvent.emit(this.searchTerm);
    console.log('thanks for search '+this.searchTerm+' movies');
  
  } */

  fetchAllMovies(){
    this.getMovies();
  }

 
  ngOnInit(): void {
   // this.addNewMovie();
    //this.getMovieById();
    //this.getMovies();
  }
  addNewMovie(){
    console.log(this.movie);
    this.movieService.addNewMovie(this.movie).subscribe();
  }

  getMovieById(){
    this.movieService.getMovieById().subscribe(data =>{
      this.movie.id = data.id;
      this.movie.title = data.title;
      this.movie.releaseDate =data.releaseDate;
      this.movie.rating = data.rating;
      this.movie.genre = data.genre;
      this.movie.plotSummary = data.plotSummary;
      this.movie.cast = data.cast;
    })
  }

  getMovies(){
    this.movieService.getMovies().subscribe((res)=>{
      console.log(res);
      this.allMovies=res;
    });
  }

  searchMovie(title:string){
    this.movieService.searchMovieService(title).subscribe((response:any) =>{
      console.log(response);
      this.allMovies =response;
    });
  }

 /* movies:Movie[] = [
    {movie_id: 1,movie_title: 'Marvel',release_date: '24/10/2012', avg_rating: 4},
    {movie_id: 2,movie_title: 'Ant Man',release_date: '15/12/2015', avg_rating: 3.5},
    {movie_id: 3,movie_title: 'Captain America',release_date: '06/11/2008', avg_rating: 4.5},
    {movie_id: 4,movie_title: 'Spyder',release_date: '19/04/2014', avg_rating: 4}
  ];*/

}
