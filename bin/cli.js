#!/usr/bin/env node

const program = require('commander');
const logger = require('../lib/logger');

program
  .version(require('../package.json').version) // xbw -V 或者 xbw --version 获取版本号
  .description('init kinds of vue projects') // 命令的介绍
  .usage('<command> [option]') // 介绍如何使用
  // 子命令 xbw init 分发到xbw-init文件中处理
  .command('init', 'init a vue project with choosed ui')
  // 子命令: xbw create 分发到xbw-create文件中处理
  .command('create', 'create something');

// 监听命令
program.on('command:*', function(args) {
  const cmd = args[0];
  // 检查是不是合法的命令
  if (['init', 'create'].includes(cmd)) {
  } else {
    // 不是合法的要进行提示
    logger.error(`Invalid command: ${program.args.join(' ')}`);
    process.exit(1);
  }
});
program.parse(process.argv);
