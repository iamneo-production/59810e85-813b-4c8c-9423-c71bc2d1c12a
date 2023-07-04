import { Injectable } from '@angular/core';
import { Review } from '../Model/Review';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewServiceService {

  error = new Subject<string>();

  private getUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/GET/review";
  private postUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/POST/review";
  private putUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/review";

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
  getReviewById(id?: number): Observable<Review> {
    return this.http.get<Review>(`${this.getUrl}/${this.id}`);
  }


  //PUT(UPDATE REVIEW)********************************************
  updateOldReview(review?: Review): Observable<Review> {
    return this.http.put<Review>(`${this.putUrl}/${review?.id}`, review);
  }

}

// Aishwarya Ghosh
