import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './validate-config';

export const TowPalConfig = (envPath?: string) => ConfigModule.forRoot({
  isGlobal: true,
  validate: validateConfig,
  /** Sometimes 'root' path may be changing
   * during usage this module from cli.
   * For such places you should explicitly define it
   * by passing to 'envPath' variable.
   * **/
  ...(envPath && { envFilePath: envPath }),
});
