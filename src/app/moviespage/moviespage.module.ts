import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviespagePageRoutingModule } from './moviespage-routing.module';

import { MoviespagePage } from './moviespage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviespagePageRoutingModule
  ],
  declarations: [MoviespagePage]
})
export class MoviespagePageModule {}
