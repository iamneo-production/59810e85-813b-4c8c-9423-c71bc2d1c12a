package com.example.springapp.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Movie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	@Query("SELECT u from Movie u")
	ArrayList<Movie> findAllMovie();

	@Query("SELECT  u from Movie u Where u.title LIKE ?1% or u.genre LIKE ?1%")
	ArrayList<Movie> serachMovie(String text);
}

//Somnath mandal
