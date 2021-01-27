import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCharacterComponent,
    AllCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
