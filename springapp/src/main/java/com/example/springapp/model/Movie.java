package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.persistence.*;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import com.example.springapp.model.Review;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table
@JsonInclude(JsonInclude.Include.ALWAYS)
public class Movie implements Serializable {
    
	private static final long serialVersionUID = 1L;
    @Id
	//@GeneratedValue(strategy  = GenerationType.AUTO)
	private long id;
	private String title;
	private Date releaseDate;
	private String rating;
	private String genre;
	private String plotSummary;
	private String cast;
	@OneToMany(mappedBy = "movie",cascade = CascadeType.ALL,fetch = FetchType.LAZY )
	@JsonBackReference
	private List<Review> reviews;

    public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


	public Movie(long id, String title, Date releaseDate, String rating, String genre,
			String plotSummary, String cast,List<Review> reviews) {
		super();
		this.id = id;
		this.title = title;
		this.releaseDate = releaseDate;
		this.rating = rating;
		this.genre = genre;
		this.plotSummary = plotSummary;
		this.cast = cast;
		this.reviews = reviews;
	}


	@Override
	public String toString() {
		return "Movie [cast=" + cast + ", genre=" + genre + ", id=" + id + ", plotSummary=" + plotSummary + ", rating="
				+ rating + ", releaseDate=" + releaseDate + ", reviews=" + reviews + ", title=" + title + "]";
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

	public List<Review> getReviews() {
		return reviews;
	}


	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	
	
	
}


//Somnath mandal