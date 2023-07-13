import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { AdminComponent } from './Admin/admin.component';
import { AllMoviesComponent } from './Admin/all-movies/all-movies.component';
import { MovieDetailComponent } from './Admin/all-movies/movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'ReviewForm', component:ReviewFormComponent},
  {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent},
  {path:"searchmovie",
  component:MovieListComponent,
  pathMatch:"full"
},
{path:"movies", component:MovieListComponent,pathMatch:"full"},
{ path: 'admin', component: AdminComponent },
{ path: 'allmovies', component: AllMoviesComponent, children: [
  { path: 'moviedetail', component: MovieDetailComponent }
]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
