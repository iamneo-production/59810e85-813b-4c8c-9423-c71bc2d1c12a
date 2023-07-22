package com.example.springapp.service;

import java.util.ArrayList;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Movie;
import com.example.springapp.model.Review;
import com.example.springapp.repository.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	
	//POST MOVIES SERVICE CLASS************************--------------------------------
	
	public ResponseEntity<?> addMovieService(Movie movie){
		 long id= movie.getId();
		String title= movie.getTitle();
		String genre2 = movie.getGenre();
		String rating2= movie.getRating();
		Date date2= movie.getReleaseDate();
		String cast2= movie.getCast();
		String plot2= movie.getPlotSummary();
		List<Review> reviews= movie.getReviews();

		
		Movie movieObj= new Movie(id,title,date2,rating2,genre2,plot2,cast2,reviews);
		movieRepository.save(movieObj);
		return new ResponseEntity<Movie>(movieObj,HttpStatus.OK);
		
	}
	
	//GET MOVIE SERVICE CLASS************************************--------------------------
	
	public List<Movie> showAllMovieService(){
		List<Movie> allMovie = movieRepository.findAllMovie();
		Collections.reverse(allMovie);
		return allMovie;
	}
	
	//GET/movie/:id  SERVICE CLASS*********************************************-------------------
	
		public Movie getMovieById(Long id) {
			return movieRepository.findById(id).orElse(null);
		}

		//Gokulnathan

	// public ResponseEntity<?> showMovieByIdService(long id){
	// 	Movie newMovie = movieRepository.findById(id).get();
	// 	System.out.print(newMovie.getId());
	// 	return  new ResponseEntity<Movie>(newMovie, HttpStatus.OK);
	// }

	//Search movie by title or genre*********************************************
	
	public ArrayList<Movie>searchMovieService(String text){
		ArrayList<Movie> search = movieRepository.serachMovie(text);
		Collections.reverse(search);
		return search;
		}

}

//Somnath mandal