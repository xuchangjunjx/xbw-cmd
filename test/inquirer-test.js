const inquirer = require('inquirer');

const questions = [
  {
    type: 'input', // 交互类型 输入
    name: 'name', // 结果集中的key
    message: '请输入名字', // 交互提示
    default: '王老五'
  },
  {
    type: 'confirm', // Yes or No
    name: 'isBeauty',
    message: '你是帅哥/美女吗?',
    default: true
  },
  {
    type: 'list', // 选择
    name: 'carType',
    message: '选择一个你想买的车品牌',
    choices: ['宝马', '奥迪', '玛莎拉蒂'] // options
  }
];
// 交互开始
inquirer.prompt(questions).then(answers => {
  console.log(answers); //
});
