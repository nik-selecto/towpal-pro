import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './validate-config';

export const TowPalConfig = ConfigModule.forRoot({
  isGlobal: true,
  validate: validateConfig,
});
