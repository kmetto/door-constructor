const path = require('path');
const fs = require('fs');

const rootFolder = path.join(`${__dirname}./../`);
const imagesFolder = `${rootFolder}src/assests/designs`;
const dataFolder = `${rootFolder}src/data`;

function findAllDesigns(pathToFolder) {
  return new Promise((resolve, reject) => {
    fs.readdir(pathToFolder, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function saveData(data, savePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(savePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function makeDesignsData(pathToImages) {
  const designNames = await findAllDesigns(pathToImages);
  const designData = designNames.map((name) => {
    const onlyName = name.split('.').slice(0, -1).join();
    return {
      value: onlyName.toUpperCase(),
      text: onlyName.toUpperCase(),
      path: `.${`${pathToImages}/${name}`.split('/src')[1]}`,
    };
  });

  return ('// @flow\n') +
  ('/* eslint-disable quote-props */\n') +
  ('/* eslint-disable comma-dangle */\n') +
  ("import type { DesignItem } from '../types/DesignItem';\n\n") +
  (`const designs: Array<DesignItem> = ${JSON.stringify(designData, null, '  ').replace(/"/g, "'")};\n`) +
  ('export default designs;\n');
}

makeDesignsData(imagesFolder).then((data) => {
  saveData(data, `${dataFolder}/designs.js`);
});
