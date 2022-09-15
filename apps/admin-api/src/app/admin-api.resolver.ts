import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AdminApiResolver {
  @Query(() => String)
  hello() {
    return `Hello from ${AdminApiResolver.name}`;
  }
}
