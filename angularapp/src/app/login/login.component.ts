import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, } from '@angular/common/http';
import { MovieService } from '../Services/movie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.loginData);

  }

  loginData = {
    email: '',
    password: '',
    selectedRole: ''
    
  };
  submit=false;
  
  SelectRole=['ADMIN','USER'];
  selectedRole: string = 'USER'; // Set the default role to USER

  constructor(private router: Router, private http: HttpClient,private movielist:MovieService) { }
  navigateToSignup()
  {
    this.router.navigate(['/signup']);
  }
  goToLandingpage()
  {
    this.router.navigate(['/login'])
    
  }
  login() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter both email and password.');
      return;
    }
    
   
  

    this.http.post<any>('https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/login', this.loginData).subscribe(
      response => {
        console.log(response);
        if (response != 'Null') {
          if (response.role === 'USER') {
            this.router.navigate(['/movies']); // Redirect to home page for USER role
            this.movielist.userId=response.id;
            console.log(response.id);
          } else if (response.role === 'ADMIN') {
            this.router.navigate(['/all-movies']); // Redirect to admin panel for ADMIN role
          }
          alert('Login successful!');
        } else {
          alert(response.message);
        }
      },
      error => {
        alert('invalid credentials. Please try again later.');
      }
    );
    }
  }