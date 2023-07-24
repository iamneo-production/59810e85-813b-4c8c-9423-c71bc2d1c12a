import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewUpdateFormComponent } from './review-update-form/review-update-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},



  {path:'',pathMatch:'full',redirectTo:'/login'}
];

 
  // {path:'signup',component:SignupComponent},
  // {path:'login',component:LoginComponent},
  // {path:'login',pathMatch:'full',redirectTo:'/login'},
  // {path:"",component:HomeComponentComponent},
//   {
//     path:"searchmovie",
//     component:MovieListComponent,
//     pathMatch:"full"
//   },
//   {path:"movies/:id", component:MovieDetailsComponent},
//   {path:"movies", component:MovieListComponent,pathMatch:"full"},
//   {path:"ReviewList/:id",component:ReviewListComponent},
//   {path:'ReviewForm', component:ReviewFormComponent},
//   {path:'ReviewUpdate/:id',component:ReviewUpdateFormComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }