import {IUser, TableName, UserType} from '@towpal-pro/types';
import {BasePgEntity} from '../base-pg.entity';
import {Entity, TableInheritance} from 'typeorm';
import {genParentTableOptions} from '@towpal-pro/utils';

@Entity(TableName.USERS)
@TableInheritance(genParentTableOptions(UserType))
export abstract class UserEntity extends BasePgEntity implements IUser<UserType.OPERATOR> {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  type: UserType.OPERATOR;
}
