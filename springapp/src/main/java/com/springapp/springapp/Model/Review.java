package com.springapp.springapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.Date;


@Entity
@Table
public class Review {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long userId;
	private String rating;
	private String reviewNote;
	private String source;	
	private Date date;
	// private Movie movie;
	private Long movieId;
	
	
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Review(Long userId, String rating, String reviewNote, String source, Date date, Long movieId) {
		this.userId = userId;
		this.rating = rating;
		this.reviewNote = reviewNote;
		this.source = source;
		this.date = date;
		this.movieId = movieId;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
	}



	public String getRating() {
		return rating;
	}



	public void setRating(String rating) {
		this.rating = rating;
	}



	public String getReviewNote() {
		return reviewNote;
	}



	public void setReviewNote(String reviewNote) {
		this.reviewNote = reviewNote;
	}



	public String getSource() {
		return source;
	}



	public void setSource(String source) {
		this.source = source;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public Long getMovieId() {
		return movieId;
	}



	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

}

//Aishwarya Ghosh