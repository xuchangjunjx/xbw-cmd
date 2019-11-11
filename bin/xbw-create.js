#!/usr/bin/env node

const program = require('commander');
var download = require('../lib/download');
var generate = require('../lib/generate');
var logger = require('../lib/logger');
const questions = require('../lib/questions');
var install = require('../lib/installDependence.js');
var inquirer = require('inquirer');

function exec() {
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
    .then(destination => {
      install(destination);
    })
    .catch(err => {
      logger.error(err);
    });
}

//
program
  .usage('create')
  // .arguments('<uitype> <projectName>')
  .action(exec)
  .parse(process.argv);
program.on('--help', function() {
  logger.info('');
  logger.info('Examples:');
  logger.info('   $ xbw create ');
});
