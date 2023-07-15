package com.example.springapp;

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
	private long id;
	private String title;
	private Date releaseDate;
	private String rating;
	private String genre;
	private String plotSummary;
	private String cast;
	//private List<Reviews> reviews;

    public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Movie(long id, String title, Date releaseDate, String rating, String genre,
			String plotSummary, String cast) {
		super();
		this.id = id;
		this.title = title;
		this.releaseDate = releaseDate;
		this.rating = rating;
		this.genre = genre;
		this.plotSummary = plotSummary;
		this.cast = cast;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Date getReleaseDate() {
		return releaseDate;
	}


	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}


	public String getRating() {
		return rating;
	}


	public void setRating(String rating) {
		this.rating = rating;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
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


//Somnath mandal

