package com.springapp.springapp;

import java.util.ArrayList;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.springapp.springapp.Movie;
import com.springapp.springapp.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	
	//POST MOVIES SERVICE CLASS************************--------------------------------
	
	public ResponseEntity<?> addMovieService(Movie movie){
		 long movieId= movie.getMovieId();
		String movieTitle= movie.getMovieTitle();
		String genre2 = movie.getGenre();
		double rating2= movie.getRating();
		String actor2= movie.getActor();
		Date date2= movie.getReleaseDate();
		String cast2= movie.getCast();
		String plot2= movie.getPlotSummary();
		
		Movie movieObj= new Movie(movieId,movieTitle,date2,rating2,genre2,actor2,plot2,cast2);
		movieRepository.save(movieObj);
		return new ResponseEntity<Movie>(movieObj,HttpStatus.OK);
		
	}
	
	//GET MOVIE SERVICE CLASS************************************--------------------------
	
	public ArrayList<Movie> showAllMovieService(){
		ArrayList<Movie> allMovie = movieRepository.findAllMovie();
		Collections.reverse(allMovie);
		return allMovie;
	}
	
	//GET/movie/:id  SERVICE CLASS*********************************************-------------------
	
	public ResponseEntity<?> showMovieByIdService(long movieId){
		Movie newMovie = movieRepository.findById(movieId).get();
		System.out.print(newMovie.getMovieId());
		return  new ResponseEntity<Movie>(newMovie, HttpStatus.OK);
	}

}

//Somnath mandal
