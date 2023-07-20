package com.example.springapp.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>  {
    
    @Query("SELECT u from Review u")
	ArrayList<Review> findAllReview();


   // @Query("SELECT u from Review u Where movieId=?1")
	//ArrayList<Review>findAllReviewMovie(Long movieId);

    List<Review>findAllByMovieId(Long id);
}

//Aishwarya Ghosh