import type { Config } from '@jest/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    coveragePathIgnorePatterns: ['/node_modules/'],
  };
};
