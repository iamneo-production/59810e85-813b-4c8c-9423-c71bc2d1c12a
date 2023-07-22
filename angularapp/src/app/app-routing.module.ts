import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {
    path:"searchmovie",
    component:MovieListComponent,
    pathMatch:"full"
  },
  {path:"/movie/:id", component:MovieDetailsComponent},
  {path:"movies", component:MovieListComponent,pathMatch:"full"},
  {path:"ReviewList/:id",component:ReviewListComponent},
  {path:'ReviewForm', component:ReviewFormComponent},
  {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }