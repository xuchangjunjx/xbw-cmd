/*
 * @Author: bowen.xu
 * @Date: 2019-09-20 16:13:46
 * @Last Modified by:   bowen.xu
 * @Last Modified time: 2019-09-20 16:13:46
 */
const inquirer = require('inquirer');

module.exports = function(questions, data, done) {
  // 交互开始
  inquirer.prompt(questions).then(answers => {
    for (const key in answers) {
      data[key] = answers[key];
    }
    done && done();
  });
};
