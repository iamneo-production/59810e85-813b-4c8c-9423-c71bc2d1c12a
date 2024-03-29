import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Movie } from "../Model/Movie";


@Injectable({
    providedIn:'root'
})


export class MovieService{


    error = new Subject<string>();

    //Somnath Mandal
    // private getUrl = "https://8080-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
    // private postUrl = "https://8080-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
    // private searchUrl = "https://8080-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
    // private putUrl = "https://8080-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";
    // private deleteUrl = "https://8080-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/DELETE/movie";

    
    //Aishwarya Ghosh
    // private getUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
    // private postUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
    // private searchUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
    // private putUrl = "https://8080-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";
    // private deleteUrl ="https://8080-cdcafaaaeecacdccdbbedbeeabbebbdd.project.examly.io/DELETE/movie";

    //jyothsna
    // private getUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
    // private postUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
    // private searchUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
    // private putUrl = "https://8080-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";
    
     //GOKULNATHAN
    // private getUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
    // private postUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
    //private searchUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
    //private putUrl = "https://8080-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";

    //Sakthivel
     private getUrl = "https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io//movie";
     private postUrl = "https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
     private searchUrl = "https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
     private putUrl = "https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";
     private deleteUrl = "https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/DELETE/movie";

    //Aishwarya
    // private getUrl = "https://8080-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/movie";
    // private postUrl = "https://8080-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/POST/movie";
    // private searchUrl = "https://8080-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/GET/movie/search";
    // private putUrl = "https://8080-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/PUT/movie";
    // private deleteUrl = "https://8080-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/DELETE/movie";
 
    userId:number=0;


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
        return this.http.get<Movie>(`${this.getUrl}/${id}`);
    }

    // search movie by title or genre
    
    searchMovieService(title:string):Observable<Movie[]>{
        return this.http.get<Movie[]>(`${this.searchUrl}/${title}`);
    }

    // PUT movie by Id
    updateMovie(id:number,movie:Movie): Observable<Object>{
        return this.http.put(`${this.putUrl}/${id}`, movie);
    }
    


    //DELETE movie by id
    deleteMovie(id: number): Observable<void> {
        return this.http.delete<void>(`${this.deleteUrl}/${id}`);
      }

}    


//Somnath mandal