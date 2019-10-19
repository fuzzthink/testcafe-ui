const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

const isDir = pathStr => fs.statSync(pathStr).isDirectory();

const getFiles = dir => {
  try {
    return fs.readdirSync(dir).reduce((files, file) => {
      const name = path.join(dir, file);
      return isDir(name)? files : [...files, name];
    }, []);
  } catch (ENOTDIR) {
    return [dir];
  }
}

const getJsFiles = dir => getFiles(dir).filter(f => f.endsWith('.js'));

const getPath = (_path) => {
  const noJoin = /^(\/|~)/.test(_path);
  return noJoin? _path: path.join(cwd, _path);
};
const getContent = _path => fs.readFileSync(getPath(_path)).toString()

module.exports = {
  path,
  isDir,
  getFiles,
  getJsFiles,
  getPath,
  getContent,
}