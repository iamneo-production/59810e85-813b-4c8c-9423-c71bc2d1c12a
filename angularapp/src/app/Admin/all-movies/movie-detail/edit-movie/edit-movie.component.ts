import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/Model/Movie';
import { MovieService } from 'src/app/Services/movie-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  id!: number;
  movie: Movie = new Movie();
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

  this.movieService.getMovieList(this.id).subscribe(data => {
    this.movie = data;
  }, error => console.log(error));
}

onSubmit(){
  this.movieService.updateMovie(this.id, this.movie).subscribe( data =>{
    this.goToMovieList();
  }
  , error => console.log(error));
}

goToMovieList(){
  alert("Successfully updated");
  this.router.navigate(['/all-movies/movie-detail']);
}

navigatetoMoviedetail()
{
  this.router.navigate(['/all-movies/movie-detail'])
}

}
