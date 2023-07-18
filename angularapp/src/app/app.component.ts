import { Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewListserviceService } from './Services/review-listservice.service';
import { ReviewServiceService } from './Services/review-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularapp';

  searchResults: string[] = [];

  constructor(private router: Router, private service: ReviewListserviceService, private revService: ReviewServiceService) { }

  performSearch(searchTerm: string): void {
    this.searchResults = [];
  }



  goToReviewList(movId: number) {
    this.router.navigate(['ReviewList', movId]);
    this.service.getMovieId(movId);
  }


  //Review Update form
  gotoReviewUpdate(revId: number) {
    this.router.navigate(['ReviewUpdate', revId]);
    this.revService.getId(revId);
  }

}
