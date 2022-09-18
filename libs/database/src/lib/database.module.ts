import {ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Config} from '@towpal-pro/config';
import {generateTypeOrmConfig} from './generate-typeorm-config';


export const DatabaseModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory(config: ConfigService<Config>) {
    return generateTypeOrmConfig(config);
  },
});
