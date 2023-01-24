import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AliensComponent } from './pages/aliens/aliens.component';
import { CharacterComponent } from './pages/character/character.component';
import { Error404Component } from './pages/error404/error404.component';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component:RegisterComponent},
  { path: 'home', component:HomeComponent},
  { path: 'character', component:CharacterComponent},
  { path: 'pictures', component:PicturesComponent},
  { path: 'aliens', component:AliensComponent},
  { path: '**', component: Error404Component}, // Rota errada direciona pra essa rota


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
