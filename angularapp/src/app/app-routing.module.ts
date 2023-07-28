import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AdminComponent } from './Admin/admin.component';
import { AllMoviesComponent } from './Admin/all-movies/all-movies.component';
import { MovieDetailComponent } from './Admin/all-movies/movie-detail/movie-detail.component';
import { EditMovieComponent } from './Admin/all-movies/movie-detail/edit-movie/edit-movie.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AdminReviewListComponent } from './Admin/all-movies/movie-detail/admin-review-list/admin-review-list.component';

const routes: Routes = [
  
  // {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'', component: LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:"",component:HomeComponentComponent},

  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:"searchmovie",
  component:MovieListComponent,
  pathMatch:"full"
},
  {path:"movies/:id", component:MovieDetailsComponent},
  {path:"movies", component:MovieListComponent,pathMatch:"full"},
  {path:"ReviewList/:id",component:ReviewListComponent},
  {path:'ReviewForm', component:ReviewFormComponent},
  {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent},

  { path: 'admin', component: AdminComponent },
  { path:'all-movies', component: AllMoviesComponent},
  { path:'all-movies/movie-detail', component: MovieDetailComponent},
  { path:'all-movies/movie-detail/edit-movie/:id', component: EditMovieComponent},
  { path:'all-movies/movie-detail/admin-review-list',component: AdminReviewListComponent},
  { path:'new-movie', component: NewmovieComponent},
  {path:'navbar',component:UserNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }