const shelljs = require('shelljs');
const addCheckMark = require('./checkmark');
const path = require('path');

const cpy = path.join(__dirname, '../node_modules/cpy-cli/cli.js');
const componentsPath = path.join(__dirname, '../src/components');
const publicPath = path.join(__dirname, '../public');
shelljs.exec(`${cpy} ${componentsPath}/**/assets/* ${publicPath}/assets/`, addCheckMark.bind(null, callback));

function callback() {
  process.stdout.write(' Copied component assets to the /public/assets/ directory\n\n');
}