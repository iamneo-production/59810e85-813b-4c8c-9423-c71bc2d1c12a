package com.example.springapp.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Review;
import com.example.springapp.service.ReviewService;

@RestController

//@CrossOrigin(origins="https://8081-fecfecbdcfcdafbecacdccdbbeeaeaadbdbabf.project.examly.io/")   //Somnath 
//@CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Aishwarya Ghosh
// @CrossOrigin(origins = "https://8081-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Sakthivel
  @CrossOrigin(origins = "https://8081-edcacfccfabeecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Ragavi
// @CrossOrigin(origins = "")     //Aishwarya R
// @CrossOrigin(origins = "https://8081-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/")     //GOKULNATHAN 
//  @CrossOrigin(origins = "https://8081-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Jyothsna
// @CrossOrigin(origins = "")     //Nandhini
@RequestMapping
public class ReviewController {
    
    @Autowired
	private ReviewService reviewService;
	
	
//	Post a new Review and rating for a Movie *************************************** 
	@PostMapping("/POST/review")
	public ResponseEntity<?> addNewReview(@RequestBody Review review){
		
		return reviewService.addNewReviewService(review);
	}

	
//	Get all Reviews and rating of all movie ****************************************
	@GetMapping("/review")
	public List<Review> showAllReviews(){
		
		return reviewService.showAllReviewService();
	}
	
	
//	Get all Reviews and rating using review Id *************************************
	@GetMapping("/review/{id}")
	public ResponseEntity<?> showReviewById(@PathVariable("id") long id){
		
		return reviewService.showReviewByIdService(id);
	}
	
	
//	Update a movie review using reviewId *******************************************
	@PutMapping("/PUT/review/{id}")
	public ResponseEntity<?> updateReview(@PathVariable Long id,@RequestBody Review review){
		
		return reviewService.updateReviewService(id,review);
	}
	

	
//	Delete a review using review id ************************************************
	@DeleteMapping("/DELETE/review/{id}")
	public ResponseEntity<?> deleteReview(@PathVariable Long id){
		
		System.out.println(id);
		return reviewService.deleteReviewService(id);		
		
	}

    
//  Get all reviews for a specific movie *******************************************
	@GetMapping("/GET/review/movie/{movieId}")
	public List<Review>  getAllReviewsForMovie(@PathVariable Long movieId){

		return reviewService.getAllReviewsForMovieService(movieId);
	}
}

//Aishwarya Ghosh