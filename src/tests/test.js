const glob = require('glob');
const path = require('path');

// Components
glob.sync('../components/**/*.spec.js').forEach(function (file) {
  console.log('file: ', file);

  // require(path.resolve(file));
});

// require('../components/Counter/Counter.spec');
// require('../components/Header/Header.spec');

// State