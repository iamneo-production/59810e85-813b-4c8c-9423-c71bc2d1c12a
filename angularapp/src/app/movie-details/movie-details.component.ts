import { Component } from '@angular/core';
import { MovieService } from '../Services/movie-service.service';
import { ReviewServiceService } from '../Services/review-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Model/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  searchTerm:string="";
  movie: Movie =new Movie();
  allMovies:Movie[]=[];

  constructor(private movieService:MovieService ,private reviewform: ReviewServiceService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getMovieById()
    
  }
  
  // getMovieDetails() {
  //   const movieId = this.route.snapshot.paramMap.get('id'); 
  //   if (movieId) {
  //     const id = parseInt(movieId, 10);
  //     this.movieService.getMovieById(id).subscribe((data: Movie) => {
  //       this.movie = data;
  //     });
  //   }
  // }

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
  
   //Button For Review
   gotoReviewForm(movieid:number,userid:number) {
    this.router.navigateByUrl('ReviewForm');
    this.reviewform.getUserMovieId(movieid,userid)
  }
}
