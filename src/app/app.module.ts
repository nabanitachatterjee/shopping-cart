import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavbarComponent} from './top-navbar/top-navbar.component';
import {AboutComponent} from './about/about.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {HomepageModule} from './homepage/homepage.module';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
