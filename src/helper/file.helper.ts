/* eslint-disable no-console */

import * as fs from 'fs';

export const createDir = (dirPath: string) => {
  try {
    const completePath = process.cwd() + dirPath;
    fs.mkdirSync(completePath, { recursive: true });

    return completePath;
  } catch (error) {
    return false;
  }
};

export const createFile = (filePath: string, fileContent: string) => {
  try {
    fs.writeFileSync(filePath, fileContent);

    return filePath;
  } catch (error) {
    return false;
  }
};
