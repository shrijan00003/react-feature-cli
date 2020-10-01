import ReactFeatureCli = require('.');
import { createDir, createFile } from './helper/file.helper';

import { Flag } from './react-feature.type';

export const createScaffold = (
  self: ReactFeatureCli,
  featureName: string,
  flags: Flag
) => {
  if (flags.isTypescript) {
    self.log('Typescript selected');

    const featureNameStr = `/${featureName}`;

    const dirPath = createDir(featureNameStr);

    if (dirPath) {
      const fileName = `${dirPath}/${featureName}.context.tsx`;
      createFile(fileName, 'This is the content');
    }
  }

  self.log('Feature name is', featureName);

  // create js scafolding
};
