import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { LandingComponent } from './landing/landing.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MapComponent } from './components/map/map.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { ModalSwitchComponent } from './components/modal-switch/modal-switch.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { firebaseConfig } from './environments/firebase-environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepOneComponent,
    LandingComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    CountrySearchComponent,
    CheckoutComponent,
    ModalComponent,
    ConfirmationComponent,
    MapComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    ModalSwitchComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
