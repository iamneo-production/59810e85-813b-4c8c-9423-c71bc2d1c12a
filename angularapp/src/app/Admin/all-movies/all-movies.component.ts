import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Model/Movie';
import { MovieService } from 'src/app/Services/movie-service.service';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  constructor(private service:MovieService,private router:Router){}

  navigatetoMoviedetail(id:any){
    localStorage.setItem('movieId',id);
    this.router.navigateByUrl('/all-movies/movie-detail');
  }
  
   ngOnInit(): void {
    this.fetchAllMovies();
  }

  onClick(id:any){
    localStorage.setItem('movieId',id);
  }

  movie:Movie[]=[];

  fetchAllMovies(){
    this.service.getMovies().subscribe(data=>{
      this.movie=data;
    })
     
  }

  deleteMovie(id: number): void {
    this.service.deleteMovie(id).subscribe(() => {
      this.movie = this.movie.filter(movie => movie.id !== id);
      alert("Deleted Successfully");
    }, error => {
      console.log('Error deleting movie:', error);
    });
  }
 
}
