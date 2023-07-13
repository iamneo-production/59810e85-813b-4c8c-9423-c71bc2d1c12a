import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewFormComponent } from './review-form/review-form.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewServiceService } from './Services/review-service.service';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { DatePipe } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './Services/movie-service.service';
import { AdminComponent } from './Admin/admin.component';
import { AllMoviesComponent } from './Admin/all-movies/all-movies.component';
import { MovieDetailComponent } from './Admin/all-movies/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewFormComponent,
    ReviewUpdateFormComponent,
    MovieListComponent,
    AdminComponent,
    AllMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ReviewServiceService, DatePipe,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
