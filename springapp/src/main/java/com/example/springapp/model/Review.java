package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.Date;


@Entity
@Table
@JsonInclude(JsonInclude.Include.ALWAYS)
public class Review implements Serializable{
    
	private static final long serialVersionUID = 1L;
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private String rating;
	private String reviewNote;
	private String source;	
	private Date date;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "movie_id")
	 private Movie movie;
	//private Long movieId;
	
	
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Review(Long userId, String rating, String reviewNote, String source, Date date, Movie movie) {
		this.userId = userId;
		this.rating = rating;
		this.reviewNote = reviewNote;
		this.source = source;
		this.date = date;
		//this.movieId = movieId;
		this.movie= movie;
	}



	public Movie getMovie() {
		return movie;
	}



	@Override
	public String toString() {
		return "Review [date=" + date + ", id=" + id + ", movie=" + movie + ", rating=" + rating + ", reviewNote="
				+ reviewNote + ", source=" + source + ", userId=" + userId + "]";
	}



	public void setMovie(Movie movie) {
		this.movie = movie;
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



	

}

//Aishwarya Ghosh