import ReactFeatureCli = require('.');

import { typeTemplate } from './template/types';
import { styleTemplate } from './template/style';
import { routeTemplate } from './template/route';
import { featureTemplate } from './template/feature';
import { contextTypescript } from './template/context';

import { Flag } from './react-feature.type';
import { createDir, createFile } from './helper/file.helper';

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
      const featureFile = `${dirPath}/${featureName}.tsx`;
      const typeFile = `${dirPath}/${featureName}.type.ts`;
      const styleFile = `${dirPath}/${featureName}.style.ts`;
      const routeFile = `${dirPath}/${featureName}.route.tsx`;
      const contextFile = `${dirPath}/${featureName}.context.tsx`;

      createFile(styleFile, styleTemplate());
      createFile(typeFile, typeTemplate(featureName));
      createFile(routeFile, routeTemplate(featureName));
      createFile(featureFile, featureTemplate(featureName));
      createFile(contextFile, contextTypescript(featureName));

      self.log(featureName, ' module created');
    }
  }

  //Todo: create js scafolding
};
