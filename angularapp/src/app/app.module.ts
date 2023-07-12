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
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
=======
import { DatePipe } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './Services/movie-service.service';
>>>>>>> 7245517b8d0eea30f7efcebfd528bed4e0e959a3

@NgModule({
  declarations: [
    AppComponent,
    ReviewFormComponent,
    ReviewUpdateFormComponent,
<<<<<<< HEAD
    SignupComponent
=======
    MovieListComponent
>>>>>>> 7245517b8d0eea30f7efcebfd528bed4e0e959a3
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
