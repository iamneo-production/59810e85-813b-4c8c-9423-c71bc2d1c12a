// Aishwarya R 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupData = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private http: HttpClient) { }
  navigateToLogin()
  {
    this.router.navigate(['/login']);
  }

  signup() {
    if (!this.signupData.email || !this.signupData.password ) {
      alert('Please enter all required information.'); // Display an alert for missing data
      return;
    }
    else{
      this.http.post<any>('https://8080-cbbeaacfddecacdccdbbeeaeaadbdbabf.project.examly.io/user/register', this.signupData).subscribe(
      response => {
        alert('Signup successful. Please login with your new account.');
        this.navigateToLogin();
       
      },
      error => {
        alert('invalid credentials. Please try again later.');
      }
    );
  }
}
}