import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './authGuard/auth.guard';
import { PerfilComponent } from './components/pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'api/login-user', component: LoginComponent },
  { path: 'api/perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'api/home', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '', redirectTo: 'api/login-user', pathMatch: 'full' }, // redireciona a rota vazia para /home
  { path: '**', redirectTo: 'api/login-user' } // redireciona todas as outras rotas para /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
