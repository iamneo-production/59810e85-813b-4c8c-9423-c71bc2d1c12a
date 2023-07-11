import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularapp';

  searchResults:string[]=[];

  constructor(private router: Router){}

  performSearch(searchTerm:string):void
{
  this.searchResults=[];
}



// gotoReviewForm() {
//   this.router.navigateByUrl('ReviewForm');
//   }

}
