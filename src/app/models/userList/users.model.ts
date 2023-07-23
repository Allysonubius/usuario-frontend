import { Roles } from "../roles/roles.model";

export class UsersList{
  id!:string;
  username!:string;
  dateCreate!:string;
  dateUpdate!:string;
  email!:string;
  perfil!: Roles[];
  active!:string;
}
