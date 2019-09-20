#!/usr/bin/env node

const program = require('commander');
const logger = require('../lib/logger');

const uis = ['iview', 'museui', 'element-ui'];

//
program
  .usage('create [xxx] [xxx2]', 'ui-type required')
  .arguments('<uitype> <projectName>')
  .action(function(ag1, ag2) {
    logger.info(ag1, ag2);
  })
  .parse(process.argv);
program.on('--help', function() {
  logger.info('');
  logger.info('ui-type:');
  logger.info('  ' + uis);
  logger.info('');
  logger.info('Examples:');
  logger.info('   $ xbw create xxxx');
});
