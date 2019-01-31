var download = require("../lib/download");
var generate = require("../lib/generate");
var projectName = "../my-project1";
download("xubowenjx/webpack", projectName + "/tmp")
  .then(template => {
    let templatePath = template;
    generate({ name: "hellow" }, templatePath, projectName);
  })
  .catch(err => {
    console.log(err);
  });
//generate('/Users/xubowen/Documents/template','/Users/xubowen/Documents/instance')
