package com.springapp.springapp;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.springapp.springapp.ReviewDTO;
import com.springapp.springapp.Review;
import com.springapp.springapp.ReviewRepo;

@Service
public class ReviewService {

    @Autowired
	private ReviewRepo reviewRepo;


	//POST Mpping service class**********************************************
	public ResponseEntity<?> addNewReviewService(ReviewDTO reviewDTO) {
		
		int movie_id=reviewDTO.getMovie_id();
		int user_id=reviewDTO.getUser_id();
		String useremail="aish@1234";
		String username="Aishwarya";
		double rating=reviewDTO.getRating();
		String review=reviewDTO.getReview();
		String sources=reviewDTO.getSources();
		
		Review reviewObj= new Review(movie_id,user_id,useremail,username,rating,review,sources);
		reviewRepo.save(reviewObj);
		return new ResponseEntity<Review>(reviewObj, HttpStatus.OK);
	}
	
	

	//GET review service class***************************************************
	public ArrayList<Review> showAllReviewService() {
		
		ArrayList<Review> allReview = reviewRepo.findAllReview();
        Collections.reverse(allReview);
    	return allReview;
		
	}



	//GET/:id review service class********************************************************
	public ResponseEntity<?> showReviewByIdService(int reviewId) {

        Review newreview= reviewRepo.findById(reviewId).get();
        System.out.print(newreview.getId());
        return new ResponseEntity<Review>(newreview, HttpStatus.OK);
	}	
	
	

	//PUT review service class***********************************************************
	public ResponseEntity<?> updateReviewService(int reviewId, Review review) {
		
		Review exsistingReview = reviewRepo.findById(reviewId).get();
		
		exsistingReview.setRating(review.getRating());
		exsistingReview.setReview(review.getReview());
		exsistingReview.setSources(review.getSources());
		
		reviewRepo.save(exsistingReview);
		return new ResponseEntity<Review>(exsistingReview, HttpStatus.OK);
	}
	
	

	//DELETE review serice class****************************************************
	public ResponseEntity<?> deleteReviewService(int  reviewId) {
		reviewRepo.deleteById(reviewId);
		return new ResponseEntity<String>("Successfully deleted", HttpStatus.OK);
	}

    
}
