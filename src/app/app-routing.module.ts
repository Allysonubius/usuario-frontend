import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './authGuard/auth.guard';

const routes: Routes = [
  { path: 'login-user', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '', redirectTo: 'login-user', pathMatch: 'full' }, // redireciona a rota vazia para /home
  { path: '**', redirectTo: 'login-user' } // redireciona todas as outras rotas para /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
