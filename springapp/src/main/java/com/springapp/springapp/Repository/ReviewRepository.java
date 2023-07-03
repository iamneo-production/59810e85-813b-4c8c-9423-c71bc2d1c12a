package com.springapp.springapp;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springapp.springapp.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>  {
    
    @Query("SELECT u from Review u")
	ArrayList<Review> findAllReview();

}
