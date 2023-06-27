import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly TOKEN_KEY = 'token';

  private currentUserSubject!: BehaviorSubject<User>;

  returnUrl!: string;

  errorMessage: string = '';

  loading = false;

  constructor(
    private http: HttpClient,
    ) {
      this.currentUserSubject = new BehaviorSubject<User>({} as User);
    }

  login(username : string, password: string):Observable<User>{
    const loginUrl = `${environment.BACKEND_API}`+'/api/login-user';

    return  this.http.post<User>(loginUrl, {username:username,password:password}).pipe(tap((response: any) => {
      const token = response.token; // Obtém o token do response

      // Salva o token na variável TOKEN_KEY
      localStorage.setItem(this.TOKEN_KEY, token);
    }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

  getToken(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUsername(){
    const username = localStorage.getItem('username');
    if(username !== null){
      return JSON.parse(username);
    }
    return null
  }

  setUsername(username : string){
    localStorage.setItem('username',JSON.stringify((username)));
  }

  setToken(token:string):void{
    localStorage.setItem(this.TOKEN_KEY,token);
  }

  removeToken():void{
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if(token){
      return true;
    }
    return false;
  }
}
