import { Field, ObjectType } from '@nestjs/graphql';
import { BaseGqlDto } from '../lib/base-gql.dto';

@ObjectType('Operator', { description: 'Testing graphql...' })
export class OperatorDto extends BaseGqlDto {
  @Field()
  name: string;
}
