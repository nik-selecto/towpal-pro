import {IOperator, UserType} from '@towpal-pro/types';
import {UserEntity} from '../lib/users/user.entity';
import {ChildEntity, Column} from 'typeorm';
import {NotNullWhenTypes} from '@towpal-pro/utils';

@ChildEntity(UserType.OPERATOR)
export class OperatorEntity extends UserEntity implements IOperator {
  @Column({
    nullable: true,
  })
  @NotNullWhenTypes([UserType.OPERATOR])
  nikName: string;
  @Column()
  password: string;
}
