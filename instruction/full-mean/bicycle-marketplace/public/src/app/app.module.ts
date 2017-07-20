//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';

//Services
import { UserService } from './user.service';
import { BikeService } from './bike.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
