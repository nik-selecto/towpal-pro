import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseGqlDto {
  @Field(type => Int)
  id: number;
}
