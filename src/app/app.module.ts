import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {LoginComponent} from './components/login/login.component';
import {AdsComponent} from './components/ads/ads.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from './components/homepage/homepage.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: 'ads', component: AdsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdsComponent,
    HomepageComponent,
    RegistrationComponent,
    InsertComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [AdsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
