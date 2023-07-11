import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path:"searchmovie",
    component:MovieListComponent,
    pathMatch:"full"
  },
  {path:"movies", component:MovieListComponent,pathMatch:"full"}
];

import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';

const Routes = [
  {path:'ReviewForm', component:ReviewFormComponent},
  {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
