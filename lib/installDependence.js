/*
 * @Author: bowen.xu
 * @Date: 2019-09-20 16:14:10
 * @Last Modified by:   bowen.xu
 * @Last Modified time: 2019-09-20 16:14:10
 */

var spawn = require('child_process').spawn;
var logger = require('./logger');
const ora = require('ora');

module.exports = function install(projectPath) {
  const spinner = ora('安装依赖');

  const cmd = `cd ${projectPath} && npm install`;
  spinner.start();
  var child = spawn(cmd, {
    shell: true
  });
  child.on('exit', function(exitCode, err) {
    if (exitCode === 0) {
      spinner.succeed();
      logger.info(`cd ${projectPath} && npm run serve`);
    } else {
      spinner.fail(err);
    }
  });
};
