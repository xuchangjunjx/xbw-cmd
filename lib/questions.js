module.exports = [
  {
    type: 'input', // 交互类型 输入
    name: 'name', // 结果集中的key
    message: 'Please input project name', // 交互提示
    default: 'my-project'
  },
  {
    type: 'input', // 交互类型 输入
    name: 'author', // 结果集中的key
    message: 'Please input author name', // 交互提示
    default: ''
  },
  {
    type: 'input', // 交互类型 输入
    name: 'email', // 结果集中的key
    message: 'Please input email', // 交互提示
    default: ''
  },
  {
    type: 'input', // 交互类型 输入
    name: 'description', // 结果集中的key
    message: 'Please input description', // 交互提示
    default: 'A vue project'
  },

  {
    type: 'list', // 选择
    name: 'ui',
    message: '选择一个UI框架',
    choices: ['museui', 'iview', 'element-ui'] // options
  }
];