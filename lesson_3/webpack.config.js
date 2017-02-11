var path = require('path');

module.exports = {
  entry: './task_3/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'task_3/dist'),
    libraryTarget: 'var',
    library: 'EntryPoint'
  }
};