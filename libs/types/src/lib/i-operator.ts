import {IUser} from './i-user';
import {UserType} from './user-type.enum';

export interface IOperator extends IUser<UserType.OPERATOR> {
  nikName: string;
  password: string;
}
