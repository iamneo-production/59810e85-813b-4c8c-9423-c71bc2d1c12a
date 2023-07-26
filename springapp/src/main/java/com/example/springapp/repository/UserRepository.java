package com.example.springapp.repository;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.springapp.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
	Optional<User> findById(long userId);
	void deleteById(long id);
	User findByEmail(String email);
	boolean existsByEmail(String email);
	boolean existsById(Long id);
}
    // Aishwarya R
