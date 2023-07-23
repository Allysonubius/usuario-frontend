import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usernamee: string = 'Allyson';
  cpf: string = '00000000000'
  cep: string = '00000000';

  constructor() { }

  ngOnInit(): void {
  }

}
