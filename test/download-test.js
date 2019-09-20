var download = require('../lib/download');
var generate = require('../lib/generate');
var logger = require('../lib/logger');

var inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'gitrp',
    message: '请输入git repo',
    default: 'xubowenjx/iview-template'
  },
  {
    type: 'input',
    name: 'project',
    message: '请输入项目名称',
    default: 'my-project'
  }
];
new Promise((resolve, reject) => {
  // 交互开始
  inquirer.prompt(questions).then(answers => {
    resolve(answers);
  });
})
  .then(meta => {
    return download(meta.gitrp, meta.project, '/tmp');
  })
  .then((template, projectName) => {
    logger.info(`template ${template}`);
    return generate({ name: projectName }, template);
  })
  .then(() => {
    logger.success('project init success ');
  })
  .catch(err => {
    logger.error(err);
  });
