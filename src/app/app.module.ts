import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {LoginComponent} from './components/login/login.component';
import {AdsComponent} from './components/ads/ads.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from './components/homepage/homepage.component';

const routes: Routes = [
  {path: 'ads', component: AdsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdsComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
