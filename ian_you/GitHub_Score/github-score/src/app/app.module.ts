import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // forms module
import { APIService } from "./api.service"; // API module
import { HttpModule } from '@angular/http'; // HTTP module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // forms module
    HttpModule // HTTP module
  ],
  providers: [APIService],  // API module
  bootstrap: [AppComponent]
})
export class AppModule { }
