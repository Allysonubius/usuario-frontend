import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authGuard/auth.guard';
import { UserService } from './service/user/user.service';
import { LoginService } from './service/login/login.service';
import { AlertsService } from './service/Alerts/alerts.service';
import { NavbarComponent } from './components/default/navbar/navbar.component';
import { FooterComponent } from './components/default/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    UserService,
    LoginService,
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
