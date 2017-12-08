const chalk = require('chalk');

function addCheckMark(callback) {
  process.stdout.write(chalk.green(' ✓'));
  callback();
}

module.exports = addCheckMark;