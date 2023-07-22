package com.example.springapp.controller;

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Movie;
import com.example.springapp.service.MovieService;


@RestController
<<<<<<< HEAD
@CrossOrigin(origins="https://8081-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/")
// @CrossOrigin(origins="https://8081-aaffdaaaacdbfdecacdccdbbedbeeabbebbdd.project.examly.io/")  //GOKULNATHAN
=======
@CrossOrigin(origins="https://8081-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/")   //Somnath Mandal
//@CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Aishwarya Ghosh
>>>>>>> dcb09f0db326cd9579e05298fb492ab919934001
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
	
<<<<<<< HEAD
	@GetMapping("/GET/movie/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable("id") Long id) {
		Movie movie = movieService.getMovieById(id);
		if (movie != null) {
			return new ResponseEntity<>(movie, HttpStatus.OK);
		} else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
=======
	@GetMapping("/movie/{id}")
	public ResponseEntity<?> showMovieById(@PathVariable long id){
		
		return movieService.showMovieByIdService(id);
>>>>>>> dcb09f0db326cd9579e05298fb492ab919934001
	}

	//Gokulnathan

	// @GetMapping("/GET/movie/{id}")
	// public ResponseEntity<?> showMovieById(@PathVariable long id){
		
	// 	return movieService.showMovieByIdService(id);
	// }

	//Search movie by title or genre*******************************
	
	@GetMapping("/GET/movie/search/{text}")
	public ArrayList<Movie> searchMovie(@PathVariable String text){
		return movieService.searchMovieService(text);
	}
}

//Somnath mandal