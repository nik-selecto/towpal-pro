import {UserEntity} from './user.entity';
import {ChildEntity, Column} from 'typeorm';

@ChildEntity()
export class SheeperEntity extends UserEntity {
  @Column()
  helloWorld: string;
}
