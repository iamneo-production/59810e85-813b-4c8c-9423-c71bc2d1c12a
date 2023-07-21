package com.example.springapp.service;

import java.util.ArrayList;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Review;
import com.example.springapp.model.Movie;
import com.example.springapp.repository.ReviewRepository;

@Service
public class ReviewService {

    @Autowired
	private ReviewRepository reviewRepo;


	//POST Mpping service class**********************************************
	public ResponseEntity<?> addNewReviewService(Review reviewDTO) {
		
		Long userId = reviewDTO.getUserId();
		String rating = reviewDTO.getRating();
		String reviewNote = reviewDTO.getReviewNote();
		String source = reviewDTO.getSource();
		Date date = reviewDTO.getDate();
		//Long movieId = reviewDTO.getMovieId();
		Movie movie = reviewDTO.getMovie();
		
		Review reviewObj= new Review(userId,rating,reviewNote,source,date,movie);
		reviewRepo.save(reviewObj);
		return new ResponseEntity<Review>(reviewObj, HttpStatus.OK);
	}
	
	

	//GET review service class***************************************************
	public List<Review> showAllReviewService() {
		
		List<Review> allReview = reviewRepo.findAllReview();
        Collections.reverse(allReview);
    	return allReview;
		
	}



	//GET/:id review service class********************************************************

	
	public ResponseEntity<?> showReviewByIdService(Long reviewId) {

        Review newreview= reviewRepo.findById(reviewId).get();
        System.out.print(newreview.getId());
        return new ResponseEntity<Review>(newreview, HttpStatus.OK);
	}	
	
	

	//PUT review service class***********************************************************
	public ResponseEntity<?> updateReviewService(Long reviewId, Review review) {
		
		Review exsistingReview = reviewRepo.findById(reviewId).get();
		
		exsistingReview.setRating(review.getRating());
		exsistingReview.setReviewNote(review.getReviewNote());
		exsistingReview.setSource(review.getSource());
		
		reviewRepo.save(exsistingReview);
		return new ResponseEntity<Review>(exsistingReview, HttpStatus.OK);
	}
	
	

	//DELETE review serice class****************************************************
	public ResponseEntity<?> deleteReviewService(Long  reviewId) {
		reviewRepo.deleteById(reviewId);
		return new ResponseEntity<String>("Successfully deleted", HttpStatus.OK);
	}


	

	//GET all reviews for a specific movie *****************************************
	public List<Review> getAllReviewsForMovieService(Long id){

		List<Review> allReviewMovie = reviewRepo.findAllByMovieId( id);
        Collections.reverse(allReviewMovie);
    	return allReviewMovie;
	}
    
}

//Aishwarya Ghosh

