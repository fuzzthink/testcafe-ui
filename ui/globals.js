const path = require('path');
import { meta as testMeta } from '../tests/settings/testMeta';
import { getContent } from '../util/pathUtil';

// path is relative to /dist/server
const getTestpath = name => path.join('./tests', name+'.js');

/**
 * Merge testMeta for @param {String} fixtureName w/ { disabled: test.skip }
 */
const getFixtureCfg = fixtureName => {
  const fixtureMeta = testMeta[fixtureName];
  const testNames = Object.keys(fixtureMeta);
  const filepath = getTestpath(fixtureName);
  let content = getContent(filepath);
  let codeStr;
  return {
    name: fixtureName,
    tests: testNames.map(name => {
      [codeStr, content] = content.split(`...meta.${fixtureName}.${name}`);
      return {
        name,
        meta: fixtureMeta[name],
        disabled: codeStr.slice(codeStr.length - 4) === 'skip',
      }
    })
  };
};

export default {
  fixtures: Object.keys(testMeta).map(name => getFixtureCfg(name)),
};