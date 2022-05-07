import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { GrilleComponent } from './grille/grille.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GrilleComponent, 
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
