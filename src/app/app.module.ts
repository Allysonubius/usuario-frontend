import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authGuard/auth.guard';
import { UserService } from './service/user/user.service';
import { LoginService } from './service/login/login.service';
import { AlertsService } from './service/Alerts/alerts.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/modals/welcome/welcome.component';
import { SuccessComponent } from './components/modals/success/success.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { CpfPipe } from './components/pipe/cpf/cpf.pipe';
import { CepPipe } from './components/pipe/cep/cep.pipe';
import { HourPipe } from './components/pipe/hour/hour.pipe';
import { DateHourPipe } from './components/pipe/dateHour/date-hour.pipe';
import { CnpjPipe } from './components/pipe/cnpj/cnpj.pipe';
import { DatePipe } from './components/pipe/date/date.pipe';
import { EmailPipe } from './components/pipe/email/email.pipe';
import { CardHomeComponent } from './components/cards/card-home/card-home.component';
import { ListUsersComponent } from './components/pages/list-users/list-users.component';
import { CreateUserComponent } from './components/modals/create-user/create-user.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    SuccessComponent,
    PerfilComponent,
    CpfPipe,
    CepPipe,
    HourPipe,
    DateHourPipe,
    CnpjPipe,
    DatePipe,
    EmailPipe,
    CardHomeComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
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
