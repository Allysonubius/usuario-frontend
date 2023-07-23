import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users/users.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,
  ) { }

  listUsers():Observable<Users>{
    const listUsers = `${environment.BACKEND_API}` + '/api/list-user';

    return this.http.get<Users>(listUsers);
  }
}
