package com.example.springapp.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;




@Service
public class UserService {

    private static final String DEFAULT = "USER";
    @Autowired
    private UserRepository userRepository;

  
    public User registerNewUser(User user) {
        user.setRole(DEFAULT);
        return userRepository.save(user);
     
        
    }
    public String login(String email, String password) {
        User existingLogin = userRepository.findByEmail(email);

        if (existingLogin != null && existingLogin.getPassword().equals(password)) {
            // Credentials matched, redirect to the Home component
            return "Login successful";
        } else {
            // Invalid credentials, show an alert
            return "Invalid credentials. Please try again.";
        }
    }


    public List<User> findAll() {
        return (List<User>) userRepository.findAll() ;
    }
}
// Aishwarya R