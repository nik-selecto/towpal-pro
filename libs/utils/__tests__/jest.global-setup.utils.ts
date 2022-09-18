import {DbForTestingEnum, generateTestConfig} from '../../../__tests__/src';

export default async function () {
  console.log('jest.global-setup.utils.ts');
  await generateTestConfig({
    prepareDbs: [DbForTestingEnum.TESTING_UTILS],
  });
}
