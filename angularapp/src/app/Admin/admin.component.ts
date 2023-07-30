import { Renderer2 } from '@angular/core';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public router:Router,private renderer: Renderer2){}
  navigatetoallmovies(){
    this.router.navigate(['/all-movies'])
  }
  navigatetoaddnewmovies()
  {
	  this.router.navigate(['/new-movie'])
  }

  ngOnInit(){
    this.renderer.setStyle(document.body, 'background-color','cornsilk')
  }
}
