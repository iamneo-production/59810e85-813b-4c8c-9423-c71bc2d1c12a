import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Model/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewListserviceService {
  // private baseUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/GET/review/movie";
  // private deleteUrl= "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/DELETE/review";

  // //Somnath mandal
  // private baseUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/GET/review/movie";
  // private deleteUrl= "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/DELETE/review";
  
  //Aishwarya Ghosh
 private baseUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/GET/review/movie";
 private deleteUrl= "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/DELETE/review";
  movieId: number = 1;
  constructor(private http: HttpClient) { }
  
  getMovieId(movId:number){
    this.movieId=movId;
   }

  getReviews( ): Observable<Review[]> {
    //const url = '${this.baseUrl}/${movieId}/reviews';
    return this.http.get<Review[]>(`${this.baseUrl}/${this.movieId}`);
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${reviewId}`);
  }
}

//jyothsna
