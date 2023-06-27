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
import { WelcomeComponent } from './components/modals/welcome/welcome.component';
import { SuccessComponent } from './components/modals/success/success.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
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
