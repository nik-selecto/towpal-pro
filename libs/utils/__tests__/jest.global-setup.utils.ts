import {DbForTestingEnum, generateTestConfig} from '../../../__tests__/src';

export default async function () {
  await generateTestConfig({
    prepareDbs: [DbForTestingEnum.TESTING_UTILS],
  });
}
