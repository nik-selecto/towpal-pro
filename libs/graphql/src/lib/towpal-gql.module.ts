import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Config } from '@towpal-pro/config';
import { join } from 'path';


export function getTowpalGqlModule(
  autoSchemaFile: string | true,
  // eslint-disable-next-line @typescript-eslint/ban-types
  include: Function[] = [],
): DynamicModule {
  return GraphQLModule.forRootAsync<ApolloDriverConfig>({
    inject: [ConfigService],
    driver: ApolloDriver,
    useFactory(config: ConfigService<Config>) {
      return {
        playground: config.get('NODE_ENV') === 'production' ? false : true,
        include,
        autoSchemaFile,
      };
    },
  });
}
