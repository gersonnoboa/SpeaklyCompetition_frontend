import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { StreaksComponent } from './streaks/streaks.component';
import { AddStreakComponent } from './add-streak/add-streak.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StreaksComponent,
    AddStreakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
