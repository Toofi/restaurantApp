import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
