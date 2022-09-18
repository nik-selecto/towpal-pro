import { Column, Entity } from 'typeorm';
import { BasePgEntity } from '../lib/base-pg.entity';
import {IOperator} from '@towpal-pro/types';

@Entity('operators')
export class OperatorEntity extends BasePgEntity implements IOperator{
  @Column()
  password: string;

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

  @Column({
    unique: true,
  })
  nikName: string;
}
