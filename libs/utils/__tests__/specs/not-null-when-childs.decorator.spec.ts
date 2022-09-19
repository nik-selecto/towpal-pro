import {genDescribeName} from '../../../../__tests__/src/lib/gen-describe-name';
import {DataSource, Repository} from 'typeorm';
import {
  TestStiChildEnum,
  TestStiDaughter,
  TestStiParent,
  TestStiSon
} from '../fixtures/single-table-inheritance.fixture';
import {DbForTestingEnum, getDataSource} from '../../../../__tests__/src';
import {dropAllTables} from '../../../../__tests__/src/lib/drop-all-tables';


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

  it(
    `Should create ${TestStiChildEnum.SON} row without errors`,
    async () => {
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
    }
  );

  afterEach(async () => {
    // await dropAllTables(db);
  });
});
