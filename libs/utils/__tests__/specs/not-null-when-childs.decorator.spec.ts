import {genDescribeName} from '../../../../__tests__/src/lib/gen-describe-name';

describe(genDescribeName(__filename), () => {
  it('hello', () => {
    console.log('world');
  });
});
