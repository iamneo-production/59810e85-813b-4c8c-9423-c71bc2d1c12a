package com.example.springapp.service;

import java.util.ArrayList;
import java.util.*;
import java.sql.Date;

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
	
	public ResponseEntity<?> showMovieByIdService(long id){
		Movie newMovie = movieRepository.findById(id).get();
		System.out.print(newMovie.getId());
		return  new ResponseEntity<Movie>(newMovie, HttpStatus.OK);
	}

	//Search movie by title or genre*********************************************
	
	public ArrayList<Movie>searchMovieService(String text){
		ArrayList<Movie> search = movieRepository.serachMovie(text);
		Collections.reverse(search);
		return search;
		}


	//PUT Update movie by Id

	public Movie updateMovie(Long id, Movie updatedMovie) {
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        if (optionalMovie.isPresent()) {
            Movie movie = optionalMovie.get();
            
            movie.setTitle(updatedMovie.getTitle());
            movie.setRating(updatedMovie.getRating());
            movie.setCast(updatedMovie.getCast());
            movie.setPlotSummary(updatedMovie.getPlotSummary());
            movie.setGenre(updatedMovie.getGenre());
            movie.setReleaseDate(updatedMovie.getReleaseDate());
            movieRepository.save(movie);
            return movie;

        } else {
            return null;
        }
    }

	//DELETE Movie
	public boolean deleteMovie(long id) {
        // Check if the movie exists in the database
        if (movieRepository.existsById(id)) {
            movieRepository.deleteById(id);
            return true;
        }
        return false;
    }

}

//Somnath mandal