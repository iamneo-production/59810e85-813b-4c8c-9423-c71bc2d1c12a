import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };
  
  SelectRole=['ADMIN','USER'];
  selectedRole: string = 'USER'; // Set the default role to USER

  constructor(private router: Router, private http: HttpClient) { }
  navigateToSignup()
  {
    this.router.navigate(['/signup']);
  }

  login() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter both email and password.');
      return;
    }

    this.http.post<any>('https://8081-edcacfccfabeecacdccdbbeeaeaadbdbabf.project.examly.io/login', this.loginData).subscribe(
      response => {
        if (response.message === 'Login successful') {
          if (this.selectedRole === 'USER') {
            this.router.navigate(['/home']); // Redirect to home page for USER role
          } else if (this.selectedRole === 'ADMIN') {
            this.router.navigate(['/adminpanel']); // Redirect to admin panel for ADMIN role
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