import {Role} from '../Components/add-user/add-user.component';

export interface AddUserRequest {

  firstname: string;
  lastname: string;
  mail: string;
  Password: string;
  tel: string;
  Username: string;
  role:Role ;
}
