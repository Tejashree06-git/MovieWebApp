import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.page.html',
  styleUrls: ['./moviespage.page.scss'],
})
export class MoviespagePage implements OnInit {
  movieList:any;
  constructor(private http:HttpClient,private appComp:AppComponent) { }

  ngOnInit() {
    this.getMovieList();
  }
  getMovieList() {
    this.http.get(this.appComp.apiUrl).subscribe(data => {
      console.log(data);
      this.movieList = data;
    },
    err => {
    console.log(err);
    });
  }

}
