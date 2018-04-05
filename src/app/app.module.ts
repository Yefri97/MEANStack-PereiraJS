import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { ProfileComponent } from './profile/profile.component';
import { IconsModule } from './/icons.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
