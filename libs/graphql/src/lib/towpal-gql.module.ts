import { ApolloDriverAsyncConfig } from '@nestjs/apollo';
import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Config } from '@towpal-pro/config';
import { NotEmptyArr } from '@towpal-pro/utils';


export function getTowpalGqlModule(
  autoSchemaFile: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  include: NotEmptyArr<Function>,
): DynamicModule {
  return GraphQLModule.forRoot<ApolloDriverAsyncConfig>({
    inject: [ConfigService],
    useFactory(config: ConfigService<Config>) {
      return {
        playground: config.get('NODE_ENV') === 'production' ? false : true,
        include,
        autoSchemaFile,
      };
    },
  });
}
