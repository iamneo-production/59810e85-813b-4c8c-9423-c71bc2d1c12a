package com.springapp.springapp;

import java.util.ArrayList;

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

import com.springapp.springapp.ReviewDTO;
import com.springapp.springapp.Review;
import com.springapp.springapp.ReviewService;

@RestController
@CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")
@RequestMapping
public class ReviewController {
    
    @Autowired
	private ReviewService reviewService;
	
	
//	Post a new Review and rating for a Movie *************************************** 
	@PostMapping("/POST/reviews")
	public ResponseEntity<?> addNewReview(@RequestBody ReviewDTO reviewDTO){
		
		return reviewService.addNewReviewService(reviewDTO);
	}

	
//	Get all Reviews and rating of all movie ****************************************
	@GetMapping("/GET/reviews")
	public ArrayList<Review> showAllReviews(){
		
		return reviewService.showAllReviewService();
	}
	
	
//	Get all Reviews and rating using review Id *************************************
	@GetMapping("/GET/reviews/{id}")
	public ResponseEntity<?> showReviewById(@PathVariable int id){
		
		return reviewService.showReviewByIdService(id);
	}
	
	
//	Update a movie review using reviewId *******************************************
	@PutMapping("/PUT/reviews/{id}")
	public ResponseEntity<?> updateReview(@PathVariable int id,@RequestBody Review review){
		
		return reviewService.updateReviewService(id,review);
	}
	
	
//	Delete a review using review id ************************************************
	@DeleteMapping("/DELETE/reviews/{id}")
	public ResponseEntity<?> deleteReview(@PathVariable int id){
		
		System.out.println(id);
		return reviewService.deleteReviewService(id);		
		
	}

}
