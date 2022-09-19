import {genDescribeName} from '../../../../__tests__/src/lib/gen-describe-name';
import {DataSource, Repository, TypeORMError} from 'typeorm';
import {
  TestStiBrother,
  TestStiChildEnum,
  TestStiDaughter,
  TestStiParent,
  TestStiSister,
  TestStiSon
} from '../fixtures/single-table-inheritance.fixture';
import {DbForTestingEnum, getDataSource} from '../../../../__tests__/src';
import {dropAllTables} from '../../../../__tests__/src/lib/drop-all-tables';


describe(genDescribeName(__filename), () => {
  let db: DataSource;
  let sonRepo: Repository<TestStiSon>;
  let daughterRepo: Repository<TestStiDaughter>;
  let brotherRepo: Repository<TestStiBrother>;
  let sisterRepo: Repository<TestStiSister>;

  beforeEach(async () => {
    db = await getDataSource(DbForTestingEnum.TESTING_UTILS, [
      TestStiParent, TestStiSon, TestStiDaughter, TestStiBrother, TestStiSister,
    ]).initialize();
    sonRepo = db.getRepository(TestStiSon);
    daughterRepo = db.getRepository(TestStiDaughter);
    brotherRepo = db.getRepository(TestStiBrother);
    sisterRepo = db.getRepository(TestStiSister);
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
      await daughterRepo.insert({
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
  it(`Should create ${TestStiChildEnum.SON} with 'car'`, async () => {
    await expect(sonRepo.insert({
      common: 'Bicycle',
      lego: 'Vikings',
      car: 'Jeep'
    })).resolves.toBeDefined();
  });
  it(`Should create ${TestStiChildEnum.BROTHER} only with 'car'`, async () => {
    await expect(brotherRepo.insert({
      car: 'Nissan'
    })).resolves.toBeDefined();
  });
  it(`Should not allow create ${TestStiChildEnum.SISTER} without 'car'`, async () => {
    await expect(brotherRepo.insert({
      common: 'Bus ticket',
    })).rejects.toBeDefined();
  });

  afterEach(async () => {
    await dropAllTables(db);
  });
});
