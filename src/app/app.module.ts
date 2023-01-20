import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavPhenomenaComponent } from './nav-phenomena/nav-phenomena.component';
import { RegisterComponent } from './register/register.component';
import { CharacterComponent } from './character/character.component';
import { TopoComponent } from './topo/topo.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NavPhenomenaComponent,
    RegisterComponent,
    CharacterComponent,
    TopoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
