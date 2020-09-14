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
  allMovies:any;
  constructor(private http:HttpClient,private appComp:AppComponent) { }

  ngOnInit() {
    this.getMovieList();
  }
  getMovieList() {
    this.http.get(this.appComp.apiUrl).subscribe(data => {
      console.log(data);
      this.movieList = data;
      this.allMovies = data;
    },
    err => {
    console.log(err);
    });
  }
  searchMovies(ev)
  {
    this.movieList = this.allMovies;
    const val = ev.target.value;
    console.log(ev.target.value);
    if(val && val.trim != '')
    {
      this.movieList = this.movieList.filter((item)=>{
        return(item.Title.toLowerCase().indexOf(val.toLowerCase())> -1);
      })

    }
  }
}
