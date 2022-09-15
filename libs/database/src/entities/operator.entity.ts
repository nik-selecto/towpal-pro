import { Column, Entity } from 'typeorm';
import { BasePgEntity } from '../lib/base-pg.entity';

@Entity('operators')
export class OperatorEntity extends BasePgEntity {
  @Column({
    unique: true,
    nullable: true,
  })
  phoneNumber?: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;
}
