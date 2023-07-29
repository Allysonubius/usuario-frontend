import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users/users.model';
import { UserService } from 'src/app/service/user/user.service';
import { Roles } from '../../../models/roles/roles.model';
import { UsersList } from '../../../models/userList/users.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  usuarios!: Users;

  constructor(
    private userService : UserService,
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.userService.listUsers().subscribe(
      (response : Users) => {
        this.usuarios = response;
      },
      error =>{
        console.error('Error ao obter lista de usuários :', error);
      }
    )
  }



}
