import {OperatorEntity} from '../entities/operator.entity';
import {BasePgEntity} from './base-pg.entity';
import {UserEntity} from '../entities/user.entity';
import {DriverEntity} from '../entities/driver.entity';
import {SheeperEntity} from '../entities/sheeper.entity';

export const entities = [
  BasePgEntity,
  UserEntity,
  OperatorEntity,
  DriverEntity,
  SheeperEntity,
];

export {OperatorEntity} from '../entities/operator.entity';
export {BasePgEntity} from './base-pg.entity';
export {UserEntity} from '../entities/user.entity';
export {DriverEntity} from '../entities/driver.entity';
export {SheeperEntity} from '../entities/sheeper.entity';
