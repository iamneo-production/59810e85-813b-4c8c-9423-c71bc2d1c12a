import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user=new User();
  

  submit=false;
 

  constructor(private router:Router){}

  navigateToLogin()
  {
    this.router.navigate(['']);
  }



  ngOnInit(): void {
        
  }
  onSubmit(){
   console.log(this.user);
  }

}
