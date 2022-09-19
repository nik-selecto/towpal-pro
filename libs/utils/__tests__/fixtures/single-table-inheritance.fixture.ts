import {ChildEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';
import {NotNullWhenTypes} from '../../src/lib/not-null-when-childs.decorator';

export const stiTableName = 'sti_family' as const;

export enum TestStiChildEnum {
  SON = 'Son',
  DAUGHTER = 'Daughter',
  BROTHER = 'Brother',
  SISTER = 'Sister',
}

@TableInheritance({
  column: {
    name: 'type',
    type: 'enum',
    enum: TestStiChildEnum,
  },
})
@Entity(stiTableName)
export abstract class TestStiParent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  common: string;

  @Column({
    nullable: true,
  })
  @NotNullWhenTypes([TestStiChildEnum.BROTHER, TestStiChildEnum.SISTER])
  car: string;
}

@ChildEntity(TestStiChildEnum.BROTHER)
export class TestStiBrother extends TestStiParent {
}

@ChildEntity(TestStiChildEnum.SISTER)
export class TestStiSister extends TestStiParent {
}

@ChildEntity(TestStiChildEnum.SON)
export class TestStiSon extends TestStiParent {
  @Column({
    nullable: true,
  })
  @NotNullWhenTypes([TestStiChildEnum.SON])
  lego: string;
}

@ChildEntity(TestStiChildEnum.DAUGHTER)
export class TestStiDaughter extends TestStiParent {
  @Column()
  barby: string;
}
