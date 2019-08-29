#!/usr/bin/env node

const program = require('commander');
const exists = require('fs').existsSync;
const ora = require('ora');

const { getTemplatePath } = require('../lib/local-path');
const logger = require('../lib/logger');
const promote = require('../lib/promote');

const uis = ['iview', 'museui', 'element-ui'];
function oneOf(type) {
  return uis.indexOf(type) > -1;
}
//
let uitype, projectName;
program
  .usage('init [ui-type] [projectName]', 'ui-type required')
  .arguments('<uitype> [projectName]')
  .action(function(ag1, ag2) {
    uitype = ag1;
    projectName = ag2;
  })
  .parse(process.argv);
program.on('--help', function() {
  logger.info('');
  logger.info('ui-type:');
  logger.info('  ' + uis);
  logger.info('');
  logger.info('Examples:');
  logger.info('   $ xbw init museui my-project');
});
// 没有参数就给出提示
if (!uitype && !projectName) {
  program.help();
}

// 检查参数是否符合规范
if (uitype && !oneOf(uitype)) {
  logger.error(`ui muse be one of ${uis}`);
  process.exit(0);
}
function download() {
  const spinner = ora('init project');
  spinner.start();
  setTimeout(() => {
    // 模拟下载模板
    spinner.succeed();
  }, 2000);
}
const projectPath = getTemplatePath(projectName || process.cwd());
if (exists(projectPath)) {
  const data = {
    place: false
  };
  promote(
    {
      type: 'confirm',
      name: 'place',
      message: '确认在当前文件夹初始化?',
      default: true
    },
    data,
    () => {
      if (data.place) {
        download();
      }
    }
  );
} else {
  download();
}
