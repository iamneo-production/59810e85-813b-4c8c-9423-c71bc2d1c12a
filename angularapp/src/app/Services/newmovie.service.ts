import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../Model/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewmovieService {

  constructor(protected http:HttpClient) { }
  addMovieByService(moviedetail : any) {
    let newmovie : Movie = new Movie();
    newmovie.id = moviedetail.id;
    newmovie.title = moviedetail.title;
    newmovie.genre = moviedetail.genre;
    newmovie.rating = moviedetail.rating;
    newmovie.cast = moviedetail.starcast;
    newmovie.releaseDate  = moviedetail.releasedate;
    newmovie.plotSummary = moviedetail.plotsummary;
    
    let headers = new HttpHeaders().set('Content-Type' , 'application/json')
      let finaldata = JSON.stringify(newmovie)
      console.log(finaldata);
    console.log(newmovie);


    this.http.post<Observable<Object>>("https://8080-ebfcdbbebddbafeedecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie",finaldata, { headers : headers}).subscribe(
      (response) => {
        console.log(response);
        return response;
      }
    )
  }

}