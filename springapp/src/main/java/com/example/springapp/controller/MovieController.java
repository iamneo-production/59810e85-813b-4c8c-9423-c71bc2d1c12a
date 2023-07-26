package com.example.springapp.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.springapp.model.Movie;
import com.example.springapp.service.MovieService;


@RestController
//  @CrossOrigin(origins="https://8081-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/")   //Somnath Mandal
// @CrossOrigin(origins = "https://8081-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/")       //jyothsna
// @CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Aishwarya Ghosh
// @CrossOrigin(origins = "https://8081-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/")     //GOKULNATHAN
// @CrossOrigin(origins = "https://8081-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Sakthivel
//@CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Aishwarya Ghosh
//@CrossOrigin(origins = "https://8081-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/")     //GOKULNATHAN 
@CrossOrigin(origins = "https://8081-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/")
@RequestMapping
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	//Post a new movie********************************
	
	@PostMapping("/POST/movie")
	public ResponseEntity<?> addNewMovie(@RequestBody Movie movie){
		
		return movieService.addMovieService(movie);
	}
	
	//GET ALL MOVIES***************************************************
	
	@GetMapping("/movie")
	public List<Movie> showAllMovies(){
		return movieService.showAllMovieService();
		
	}
	
	//GET A MOVIE BY MOVIE ID****************************************
	
	@GetMapping("/movie/{id}")
	public ResponseEntity<?> showMovieById(@PathVariable long id){
		
		return movieService.showMovieByIdService(id);
	}

	//Search movie by title or genre*******************************
	
	@GetMapping("/GET/movie/search/{text}")
	public ArrayList<Movie> searchMovie(@PathVariable String text){
		return movieService.searchMovieService(text);
	}

	//PUT Update Movie by id 

	@PutMapping("PUT/movie/{id}")
    public ResponseEntity<?> updateMovie(@PathVariable("id") Long id, @RequestBody Movie movie) {
        Movie updatedMovie = movieService.updateMovie(id, movie);
        if (updatedMovie != null) {
            return ResponseEntity.ok(updatedMovie);
        } else {
            return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.NOT_FOUND);
        }
    }
}

//Somnath mandal