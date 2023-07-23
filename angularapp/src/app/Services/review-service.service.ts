import { Injectable } from '@angular/core';
import { Review } from '../Model/Review';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Model/Movie';

@Injectable({
  providedIn: 'root'
})

export class ReviewServiceService {
  
  error = new Subject<string>();
  
  //Aishwarya Ghosh
//   private getUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/review";
//   private postUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
//   private putUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";
//   private getMovieUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/movie";

  //  private getUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/review";
  //  private postUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
  //  private putUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";
  //  private getMovieUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/movie";

  //GOKULNATHAN
  // private getUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/review";
  // private postUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
  // private putUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";
  // private getMovieUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/movie";

  //Somnath Mandal
  private getUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/review";
  private postUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/POST/review";
  private putUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/PUT/review";
  private getMovieUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/movie";


  id?: number;
  movieId:number=1;
  UserId:number=7;

  constructor(private http: HttpClient) { }

  //GET ALL REVIEWS*************************************************
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.getUrl}`);
  }



  //POST A NEW REVIEW***********************************************

  getUserMovieId(movieid:number,userid:number){
    this.movieId=movieid;
    this.UserId=userid;
  }

  getTheMovie(): Observable<Movie>{
    return this.http.get<Movie>(`${this.getMovieUrl}/${this.movieId}`);
  }

  addNewReview(review?: Review): Observable<Object> {
    return this.http.post<Object>(`${this.postUrl}`, review);
  }


  //GET REVIEW BY ID***********************************************

  getId(getId?: number) {
    this.id = getId;
  }
  getReviewById(): Observable<Review> {
    return this.http.get<Review>(`${this.getUrl}/${this.id}`);
  }


  //PUT(UPDATE REVIEW)********************************************
  updateOldReview(review?: Review): Observable<Review> {
    return this.http.put<Review>(`${this.putUrl}/${review?.id}`, review);
  }

}

// Aishwarya Ghosh
