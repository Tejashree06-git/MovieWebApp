import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  constructor(private router:Router,private http:HttpClient,private appComp:AppComponent) { }

  ngOnInit() {
  }
displayMovieDetails()
{
  let movieID = localStorage.getItem('movieID');
  let url = this.appComp.apiUrl;
  this.http.get(url).subscribe(data => {
    console.log(data);

  },
  err => {
  console.log(err);
  });

}
}
