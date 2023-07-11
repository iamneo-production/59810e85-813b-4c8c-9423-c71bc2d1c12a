import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewFormComponent } from './review-form/review-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewServiceService } from './Services/review-service.service';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { DatePipe } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './Services/movie-service.service';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewFormComponent,
    ReviewUpdateFormComponent,
    MovieListComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule 
  ],
  providers: [ReviewServiceService, DatePipe,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
