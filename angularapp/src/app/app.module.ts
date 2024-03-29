import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewFormComponent } from './review-form/review-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewServiceService } from './Services/review-service.service';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DatePipe } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './Services/movie-service.service';
import { ReviewListComponent } from './review-list/review-list.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { AdminComponent } from './Admin/admin.component';
import { AllMoviesComponent } from './Admin/all-movies/all-movies.component';
import { MovieDetailComponent } from './Admin/all-movies/movie-detail/movie-detail.component';
import { EditMovieComponent } from './Admin/all-movies/movie-detail/edit-movie/edit-movie.component';
import { AdminReviewListComponent } from './Admin/all-movies/movie-detail/admin-review-list/admin-review-list.component';


@NgModule({
  
  declarations: [
    AppComponent,
    ReviewFormComponent,
    ReviewUpdateFormComponent,
    SignupComponent,
    MovieListComponent,
    ReviewListComponent,
    UserNavComponent,
    AdminComponent,    
    HomeComponentComponent,
    NewmovieComponent,
    LoginComponent,
    AllMoviesComponent,
    MovieDetailComponent,
    EditMovieComponent,
    AdminReviewListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [ReviewServiceService, DatePipe,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

