import {IUser} from './i-user';

export interface IOperator extends IUser {
  nikName: string;
  password: string;
}
