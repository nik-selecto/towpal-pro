import {ChildEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';

export const stiTableName = 'sti_family' as const;
export enum TestStiChildEnum {
  SON = 'Son',
  DAUGHTER = 'Daughter',
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
}

@ChildEntity(TestStiChildEnum.SON)
export class TestStiSon extends TestStiParent {
  @Column()
  lego: string;
}

@ChildEntity(TestStiChildEnum.DAUGHTER)
export class TestStiDaughter extends TestStiParent {
  @Column()
  barby: string;
}
