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
  languageList = [];
  LocationList = [];
  language = "";
  location = "";
  constructor(private http:HttpClient,private appComp:AppComponent) { }

  ngOnInit() {
    this.getMovieList();
  }

  selectLanguage(ev){
    this.language = ev.detail.value;
    this.getMovieList();

  }
  selectLocation(ev){
    this.location = ev.detail.value;
    this.getMovieList();
  }
  getMovieList() {
    let url = this.appComp.apiUrl;
    if(this.language!="" && (this.location == "" || this.location == "All"))
    url = this.appComp.apiUrl+"?Language="+this.language;
    else if(this.location !="" && (this.language == "" || this.language == "All"))
    url =this.appComp.apiUrl+"?Location="+this.location;
    else if((this.language!="" && this.location !="") && (this.language!="All" && this.location !="All"))
    url =this.appComp.apiUrl+"?Language="+this.language+"&Location="+this.location;    
    else if(this.language == "All" && this.location == "All")
    url = this.appComp.apiUrl;

    this.http.get(url).subscribe(data => {
      console.log(data);
      this.movieList = data;
      this.allMovies = data;
      this.movieList.forEach(element => {
        if(this.languageList.includes(element.Language))
        {
          console.log('already in');
        }
        else{
        this.languageList.push(element.Language);
        }
        if(this.LocationList.includes(element.Location))
        {
          console.log('already in');
        }
        else{
        this.LocationList.push(element.Location);
        }

      });
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
