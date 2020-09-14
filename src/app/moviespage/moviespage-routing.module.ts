import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviespagePage } from './moviespage.page';

const routes: Routes = [
  {
    path: '',
    component: MoviespagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviespagePageRoutingModule {}
