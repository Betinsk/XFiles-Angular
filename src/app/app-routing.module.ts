import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component:RegisterComponent},
  { path: 'home', component:HomeComponent},
  { path: 'character', component:CharacterComponent},
  { path: '**', component: Error404Component}, // Rota errada direciona pra essa rota


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
