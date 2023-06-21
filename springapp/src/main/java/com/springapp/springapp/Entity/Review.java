package com.springapp.springapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class Review {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int movie_id;
	private int user_id;
	private String useremail;
	private String username;
	private double rating;
	private String review;
	private String sources;	
	
	
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Review(int movie_id, int user_id,String useremail, String username, double rating, String review,
			String sources) {
		super();
		this.movie_id = movie_id;
		this.user_id = user_id;
		this.useremail = useremail;
		this.username = username;
		this.rating = rating;
		this.review = review;
		this.sources = sources;
	}

	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	public int getMovie_id() {
		return movie_id;
	}



	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}


	public int getUser_id() {
		return user_id;
	}



	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getUseremail() {
		return useremail;
	}


	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
	}


	public String getReview() {
		return review;
	}


	public void setReview(String review) {
		this.review = review;
	}


	public String getSources() {
		return sources;
	}


	public void setSources(String sources) {
		this.sources = sources;
	}
	
	
}
