package com.springapp.springapp;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springapp.springapp.Movie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	@Query("SELECT u from Movie u")
	ArrayList<Movie> findAllMovie();
}

//Somnath mandal