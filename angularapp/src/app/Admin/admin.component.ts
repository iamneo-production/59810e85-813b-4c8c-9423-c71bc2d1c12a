import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public route:Router){}
  navigatetoallmovies(){
    this.route.navigate(['/all-movies'])
  }
  navigatetoaddnewmovies()
  {
	  this.route.navigate(['/addnewmovies'])
  }
}
