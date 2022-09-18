/* eslint-disable */
import { Config } from 'jest';
const jestUtilsConfig: Config = {
  // ========= DEFAULT SETTINGS ================
  displayName: 'utils',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/utils',
  // ============================================
  globalSetup: '<rootDir>/__tests__/jest.global-setup.utils.ts',
};

export default jestUtilsConfig;
