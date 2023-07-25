import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewmovieService } from '../Services/newmovie.service';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent {
  fg = new FormGroup({
    id: new FormControl(""),
    title: new FormControl(""),
    genre: new FormControl(""),
    rating: new FormControl(""),
    starcast: new FormControl(""),
    releasedate: new FormControl(""),
    plotsummary: new FormControl("")
   

  })

  constructor(private handler : NewmovieService) {

  }
  
  addMovie() {
    let id = this.fg.controls.id.value;
    let title = this.fg.controls.title.value;
    let genre = this.fg.controls.genre.value;
    let rating = this.fg.controls.rating.value;
    let starcast = this.fg.controls.starcast.value;
    let releasedate = this.fg.controls.releasedate.value;
    let plotsummary = this.fg.controls.plotsummary.value;
  
    
   

    let moviedetail = {
      id:id,
      title: title,
      genre: genre,
      rating: rating,
      starcast: starcast,
      releasedate:  releasedate,
      plotsummary: plotsummary,
    
    };
   
    this.handler.addMovieByService(moviedetail)
    console.log(id,title,genre,rating,starcast,releasedate,plotsummary);
  }


}
