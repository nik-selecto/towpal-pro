import {IBase} from './i-base';

export interface IUser extends IBase {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}
