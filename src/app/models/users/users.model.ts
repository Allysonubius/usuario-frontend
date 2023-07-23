import { Roles } from "../roles/roles.model";
import { UsersList } from "../userList/users.model";

export class Users{
  content?: UsersList[];
  pageable?: any;
  last?: boolean;
  totalPages?: number;
  totalElements?: number;
  size?: number;
  number?: number;
  sort?: any;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
}
