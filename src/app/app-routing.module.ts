import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GrilleComponent } from './grille/grille.component';

const routes: Routes = [
  {path: '', component: UserComponent },
  {path: 'jeu', component: GrilleComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
