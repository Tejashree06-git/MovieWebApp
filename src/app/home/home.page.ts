import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:any;
  password:any;
  constructor(private router:Router) {}
  login(){
    if(this.username == "User" && this.password == "user123")
    {
    localStorage.setItem('username',this.username);
    this.router.navigate(['moviespage']);
    }
  
  }

}
