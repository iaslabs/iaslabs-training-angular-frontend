import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// here, put all routes that you need use.
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
