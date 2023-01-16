import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavPhenomenaComponent } from './nav-phenomena/nav-phenomena.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NavPhenomenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
