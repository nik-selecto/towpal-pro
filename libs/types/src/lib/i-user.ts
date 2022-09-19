import {IBase} from './i-base';
import {ChildTableType} from './child-table.type';
import {UserType} from './user-type.enum';

export interface IUser<T extends UserType> extends IBase, ChildTableType<T> {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}
