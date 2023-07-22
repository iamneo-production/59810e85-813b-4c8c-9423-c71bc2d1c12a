import { Injectable } from '@angular/core';
import { Review } from '../Model/Review';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewServiceService {

  error = new Subject<string>();
  
  //Aishwarya Ghosh
  private getUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/GET/review";
  private postUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
  private putUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";
<<<<<<< HEAD

  // private getUrl = "/GET/review";
  // private postUrl = "/POST/review";
  // private putUrl = "/PUT/review";
=======
 private getMovieUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
>>>>>>> dcb09f0db326cd9579e05298fb492ab919934001

  //  private getUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/review";
  //  private postUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
  //  private putUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";
  //  private getMovieUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
  id?: number;
  constructor(private http: HttpClient) { }

  //GET ALL REVIEWS*************************************************
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.getUrl}`);
  }



  //POST A NEW REVIEW***********************************************
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