import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {
movieTitle = "";
Moviedata = [];
  constructor(private router:Router,private http:HttpClient,private appComp:AppComponent,private alertCntrl:AlertController) { }

  ngOnInit() {
    this.displayMovieDetails();

  }
displayMovieDetails()
{
  let movieID = localStorage.getItem('movieID');
  let url = this.appComp.apiUrl+"?imdbID="+movieID;
  this.http.get(url).subscribe(data => {
    console.log(data);
    this.Moviedata = data[0];
    this.movieTitle = data[0].Title;
  },
  err => {
  console.log(err);
  });
}
async bookTickets() {
    const alert = await this.alertCntrl.create({
      cssClass: 'my-custom-class',
      header: 'Book tickets',
      inputs: [
        {
          name: 'Enter the number of seats',
          type: 'text',
          placeholder: 'Max 10'
        }],
              buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Book',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
