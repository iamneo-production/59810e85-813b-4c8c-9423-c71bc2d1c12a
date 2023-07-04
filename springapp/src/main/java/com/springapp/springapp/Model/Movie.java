package com.springapp.springapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.Date;


@Entity
@Table
public class Movie {
    
    @Id
	//@GeneratedValue(strategy  = GenerationType.AUTO)
	private long movieId;
	private String movieTitle;
	private Date releaseDate;
	private double rating;
	private String genre;
	private String actor;
	private String plotSummary;
	private String cast;
	//private List<Reviews> reviews;

    public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Movie(long movieId, String movieTitle, Date releaseDate, double rating, String genre, String actor,
			String plotSummary, String cast) {
		super();
		this.movieId = movieId;
		this.movieTitle = movieTitle;
		this.releaseDate = releaseDate;
		this.rating = rating;
		this.genre = genre;
		this.actor = actor;
		this.plotSummary = plotSummary;
		this.cast = cast;
	}


	public long getMovieId() {
		return movieId;
	}


	public void setMovieId(long movieId) {
		this.movieId = movieId;
	}


	public String getMovieTitle() {
		return movieTitle;
	}


	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}


	public Date getReleaseDate() {
		return releaseDate;
	}


	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}


	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}


	public String getActor() {
		return actor;
	}


	public void setActor(String actor) {
		this.actor = actor;
	}


	public String getPlotSummary() {
		return plotSummary;
	}


	public void setPlotSummary(String plotSummary) {
		this.plotSummary = plotSummary;
	}


	public String getCast() {
		return cast;
	}


	public void setCast(String cast) {
		this.cast = cast;
	}
	
	
	
}
