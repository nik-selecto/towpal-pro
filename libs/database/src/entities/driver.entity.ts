import {Check, ChildEntity, Column} from 'typeorm';
import {UserEntity} from './user.entity';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import 'reflect-metadata';

function SuchNullable() {
  return function(cl, prop) {
    const _prop = new SnakeNamingStrategy().columnName(prop, '', []);
    Check('"ok_google" is not null')(cl, _prop);
  };
}

@ChildEntity()
export class DriverEntity extends UserEntity {
  @Column({
    type: 'text',
    nullable: true,
  })

  @SuchNullable()
  //   @Check('"ok_google" is not null')
  okGoogle: string;
}
