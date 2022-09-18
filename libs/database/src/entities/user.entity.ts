import {Column, Entity, TableInheritance} from 'typeorm';
import {IUser} from '@towpal-pro/types';
import {BasePgEntity} from '../lib/base-pg.entity';

@Entity('users')
@TableInheritance({
  column: {
    type: 'varchar',
    name: 'type',
  },
})
export class UserEntity extends BasePgEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
    nullable: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  mobileNumber: string;
}
