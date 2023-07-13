import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Model/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewListserviceService {
  private baseUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/GET/review/movie";

  constructor(private http: HttpClient) { }

  getReviews(movieId: number): Observable<Review[]> {
    //const url = '${this.baseUrl}/${movieId}/reviews';
    return this.http.get<Review[]>(`${this.baseUrl}/${movieId}`);
  }
}
