/*
 * @Author: bowen.xu
 * @Date: 2019-09-20 16:14:26
 * @Last Modified by:   bowen.xu
 * @Last Modified time: 2019-09-20 16:14:26
 */

const chalk = require('chalk');

module.exports = {
  success(msg) {
    console.log(chalk.bold.blue('√ ' + msg));
  },
  error(msg) {
    console.log(chalk.bold.red('× ' + msg));
  },
  warn(msg) {
    console.log(chalk.bold.yellow('! ' + msg));
  },
  info(msg) {
    console.log(msg);
  }
};
