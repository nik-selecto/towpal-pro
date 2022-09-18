import {ChildEntity, Column, Entity} from 'typeorm';
import {IOperator} from '@towpal-pro/types';
import {UserEntity} from './user.entity';

@ChildEntity()
export class OperatorEntity extends UserEntity implements IOperator{
  @Column()
  password: string;

  @Column({
    unique: true,
  })
  nikName: string;
}
