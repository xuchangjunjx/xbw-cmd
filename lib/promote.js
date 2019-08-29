const inquirer = require('inquirer');
module.exports = function(questions, data, done) {
  //交互开始
  inquirer.prompt(questions).then(answers => {
    for (let key in answers) {
      data[key] = answers[key];
    }
    done && done();
  });
};
