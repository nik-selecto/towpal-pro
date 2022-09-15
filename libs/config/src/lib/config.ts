import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class Config {
  @IsIn(['production', 'development'])
  @IsNotEmpty()
  NODE_ENV ='development';
  @Transform(({ value }) => +value)
  @IsNumber()
  ADMIN_API_PORT = 3000;
  @Transform(({ value }) => +value)
  @IsNumber()
  RIDER_API_PORT = 3001;
  @Transform(({ value }) => +value)
  @IsNumber()
  DRIVER_API_PORT = 3002;
  @IsString()
  @IsNotEmpty()
  PG_HOST = 'localhost';
  @IsString()
  @IsNotEmpty()
  PG_USER = 'postgres';
  @IsString()
  @IsNotEmpty()
  PG_PASS = 'postgres';
  @IsString()
  @IsNotEmpty()
  PG_DB = 'ridy';
  @IsString()
  @IsNotEmpty()
  REDIS_HOST = 'localhost';
  @Transform(({ value }) => +value)
  @IsNumber()
  REDIS_PORT = 6379;
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  FORCE_SYNC_DB = true;

  HOST?: string;
  FLEET_API_PORT?: string;
  DEMO_MODE?: string;
  MAIN_PORT?: string;
  GATEWAY_SERVER_URL?: string;
  ENCRYPTION_KEY?: string;
  MANDATORY_VERSION_CODE?: string;
  OPTIONAL_VERSION_CODE?: string;
  REQUEST_EXPIRATION?: string;
  DRIVERS_ALWAYS_ON?: string;
  DRIVER_SERVER_URL?: string;
  REQUEST_SOUND?: string;
  MOTAXI?: string;
}
