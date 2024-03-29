'use strict';

const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '../');
const iconSource = path.join(rootDir, './src/assets/images/icons');

const copy = (source, dest) => {
  if (source && fs.existsSync(source) && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
    fs.createReadStream(source).pipe(fs.createWriteStream(dest));
    return;
  }

  throw new Error('not match');
};

copy(path.join(iconSource, 'favicon.ico'), path.join(rootDir, '_book/gitbook/images/favicon.ico'));
copy(
  path.join(iconSource, 'apple-touch-icon-180x180.png'),
  path.join(rootDir, '_book/gitbook/images/apple-touch-icon-precomposed-152.png'),
);
