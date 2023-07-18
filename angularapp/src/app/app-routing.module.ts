import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AdminComponent } from './Admin/admin.component';
import { AllMoviesComponent } from './Admin/all-movies/all-movies.component';
import { MovieDetailComponent } from './Admin/all-movies/movie-detail/movie-detail.component';
import { EditMovieComponent } from './Admin/all-movies/movie-detail/edit-movie/edit-movie.component';

const routes: Routes = [
  {
    path:"searchmovie",
    component:MovieListComponent,
    pathMatch:"full"
  },
  {path:"movies", component:MovieListComponent,pathMatch:"full"},
  {path:"ReviewList/:id",component:ReviewListComponent},
  {path:'ReviewForm', component:ReviewFormComponent},
  {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent},
  {path:"searchmovie",
  component:MovieListComponent,
  pathMatch:"full"
},
{path:"movies", component:MovieListComponent,pathMatch:"full"},
{ path: '', component: AdminComponent },
{ path:'all-movies', component: AllMoviesComponent},
{ path:'all-movies/movie-detail', component: MovieDetailComponent},
{ path:'all-movies/movie-detail/edit-movie', component: EditMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
