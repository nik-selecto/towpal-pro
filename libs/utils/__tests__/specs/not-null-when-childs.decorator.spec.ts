import {genDescribeName} from '../../../../__tests__/src/lib/gen-describe-name';
import {DataSource, Repository, TypeORMError} from 'typeorm';
import {
  TestStiChildEnum,
  TestStiDaughter,
  TestStiParent,
  TestStiSon
} from '../fixtures/single-table-inheritance.fixture';
import {DbForTestingEnum, getDataSource} from '../../../../__tests__/src';


describe(genDescribeName(__filename), () => {
  let db: DataSource;
  let sonRepo: Repository<TestStiSon>;
  let daughter: Repository<TestStiDaughter>;

  beforeEach(async () => {
    db = await getDataSource(DbForTestingEnum.TESTING_UTILS, [
      TestStiParent, TestStiSon, TestStiDaughter,
    ]).initialize();
    sonRepo = db.getRepository(TestStiSon);
    daughter = db.getRepository(TestStiDaughter);
  });

  it(`Should create ${TestStiChildEnum.SON} row without errors`, async () => {
    let error: any;
    try {
      await sonRepo.insert({
        common: 'T-shirt',
        lego: 'StarWars',
      });
    } catch (_error) {
      error = _error;
      console.error(_error);
    }
    expect(error).toBeUndefined();
  });
  it(`Should create ${TestStiChildEnum.DAUGHTER} row without 'lego'`, async () => {
    let error: any;
    try {
      await daughter.insert({
        common: 'T-shirt',
        barby: 'Elina',
      });
    } catch (_error) {
      error = _error;
      console.error(_error);
    }
    expect(error).toBeUndefined();
  });
  it(`Should throw error when try create ${TestStiChildEnum.SON} row without 'lego'`, async () => {
    await expect(sonRepo.insert({
      common: 'T-shirt',
    })).rejects.toBeInstanceOf(TypeORMError);
  });
  it(`Should create ${TestStiChildEnum.SON} with car`, async () => {
    await expect(sonRepo.insert({
      common: 'Bicycle',
      lego: 'Vikings',
      car: 'Jeep'
    })).resolves.toBeDefined();
  });

  afterEach(async () => {
    // await dropAllTables(db);
  });
});
