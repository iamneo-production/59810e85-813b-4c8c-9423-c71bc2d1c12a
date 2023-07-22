import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Movie } from "../Model/Movie";


@Injectable({
    providedIn:'root'
})


export class MovieService{


    error = new Subject<string>();

<<<<<<< HEAD
    private getUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/GET/movie";
=======
    private getUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/movie";
>>>>>>> dcb09f0db326cd9579e05298fb492ab919934001
    private postUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/POST/movie";
    private searchUrl = "https://8080-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/GET/movie/search";
    
    id?:number;
    constructor(private http:HttpClient) { }

    //GET all movies****************************
    getMovies():Observable<Movie[]>{
        return this.http.get<Movie[]>(`${this.getUrl}`);
    }

    //POST a new movie***************************

    addNewMovie(movie?:Movie):Observable<Object>{
        return this.http.post<Object>(`${this.postUrl}`,movie);
    }


    //GET movie by Id

    getId(getId?: number){
        this.id = getId;
    }

    getMovieById(id?:number):Observable<Movie>{
        return this.http.get<Movie>(`${this.getUrl}/${this.id}`);
    }

    // search movie by title or genre
    
    searchMovieService(title:string):Observable<Movie[]>{
        return this.http.get<Movie[]>(`${this.searchUrl}/${title}`);
    }
}    