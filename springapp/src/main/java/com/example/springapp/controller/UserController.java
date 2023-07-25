package com.example.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.service.UserService;







@RestController
@RequestMapping
//  @CrossOrigin(origins="https://8081-fecfecbdcfcdafbecacdccdbbedbeeabbebbdd.project.examly.io/")   //Somnath 
// @CrossOrigin(origins = "https://8081-cdcafaaaeecacdccdbbeeaeaadbdbabf.project.examly.io/")         //Aishwarya Ghosh
// @CrossOrigin(origins = "")     //Sakthivel
//  @CrossOrigin(origins = "https://8081-edcacfccfabeecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Ragavi
//@CrossOrigin(origins = "https://8081-bcfbabdfbcebecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Aishwarya R
// @CrossOrigin(origins = "https://8081-aaffdaaaacdbfdecacdccdbbeeaeaadbdbabf.project.examly.io/")     //GOKULNATHAN 
 @CrossOrigin(origins = "https://8081-ccbcfbaefbedecacdccdbbeeaeaadbdbabf.project.examly.io/")     //Jyothsna
// @CrossOrigin(origins = "")     //Nandhini

public class UserController {


	

	@Autowired
    private UserService userService;

	

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/user/register")
    public User registerNewUser(@RequestBody User user) throws Exception {
        return userService.registerNewUser(user);
    }
    
     
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> user(@RequestBody User user) {
        String result = userService.login(user.getEmail(), user.getPassword());
        HttpStatus status = result.equals("Login successful") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        Map<String, String> response = new HashMap<>();
        response.put("message", result);
        return ResponseEntity.status(status).body(response);
    }
    

}
// Aishwarya R
