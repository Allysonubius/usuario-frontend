import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usernamee: string = 'Allyson';
  job : string = 'Mid Level Full Stack Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
