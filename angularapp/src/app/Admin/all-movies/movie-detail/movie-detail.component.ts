import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Model/Movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  MovieService: any;
  constructor(private router:Router){}

  
  movie: Movie = {
    id: 0,
    title: '',
    rating: '',
    cast: '',
    plotSummary: '',
    genre: '',
    releaseDate: new Date(),
    movieId: undefined
  };

  

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie(){
    this.MovieService.getMovieList(localStorage.getItem('movieId')).subscribe((data: Movie)=>{
      this.movie = data;
      console.log(this.movie);
    })
  }
  navigatetoEditmovie(id:number){
   this.router.navigate(["/all-movies/movie-detail/edit-movie",id]);
  }

  navigatetoReviewmovie(){
    this.router.navigate([""])
   }
}
