//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
//Services
import { StyleService } from './style.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
