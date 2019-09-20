var download = require('../lib/download');
var generate = require('../lib/generate');
var logger = require('../lib/logger');
const questions = require('../lib/questions');

var inquirer = require('inquirer');

new Promise((resolve, reject) => {
  // 交互开始
  inquirer.prompt(questions).then(answers => {
    resolve(answers);
  });
})
  .then(meta => {
    if (meta.ui) {
      meta.gitrp = `xubowenjx/${meta.ui}-template`;
    }
    return download(meta, '/tmp');
  })
  .then(({ tmppath, meta }) => {
    return generate(meta, tmppath, tmppath.replace('/tmp', ''));
  })
  .then(() => {
    logger.success('project init success ');
  })
  .catch(err => {
    logger.error(err);
  });
