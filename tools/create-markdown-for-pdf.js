const { EOL } = require('os');
const { promisify } = require('util');
const {
  readFile: legacyReadFile,
  writeFile: legacyWriteFile,
} = require('fs');
const pkgDir = require('pkg-dir');

const readFile = promisify(legacyReadFile);
const writeFile = promisify(legacyWriteFile);

const chapters = require('../src/chapters.json');
const chapterKeys = Object.keys(chapters);

const DIST_DIR = 'dist';
const DRAFT_DIR = 'src/drafts';

const FILE_EXT = '.md';
const OUT_FILE_NAME = 'for-pdf';
const OUT_FILE_PATH = `${DIST_DIR}/${OUT_FILE_NAME}${FILE_EXT}`;

(async () => {
  const rootDir = await pkgDir(__dirname);

  const contents = chapterKeys
    .map((key) => {
      const chapter = chapters[key];
      return chapter.contents;
    });

  const paths = contents
    .map((content) => {
      return content.map((c) => `${c.path}${FILE_EXT}`);
    })
    .reduce((acc, val) => {
      return acc.concat(val);
    }, []);

  const absolutePaths = paths
    .map((path) => `${rootDir}/${DRAFT_DIR}/${path}`);

  let fileContent = '';
  for (let path of absolutePaths) {
    const content = await readFile(path, 'utf8');
    fileContent += `${content}${EOL}${EOL}`;
  }

  await writeFile(`${rootDir}/${OUT_FILE_PATH}`, fileContent);
})();
