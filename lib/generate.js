const Metalsmith = require("metalsmith");
const Handlebars = require("./handlebar-help");
//命令行交互
const promote = require("./promote");
const questions = require("./questions");
const rm = require("rimraf").sync;
const chalk = require("chalk");
function startsWith(source, target) {
  return source.indexOf(target) === 0;
}
function prompts(prompts) {
  return (files, metalsmith, done) => {
    promote(prompts, metalsmith.metadata(), done);
  };
}
function checkFile(file) {
  let list = ["js", "json", "html", "md"];
  list.concat(
    list.map(el => {
      return el.toUpperCase();
    })
  );
  let suffix = file.substring(file.indexOf(".") + 1);
  return list.indexOf(suffix) > -1;
}
module.exports = function(metadata = {}, source, destination = ".") {
  if (!source) {
    return Promise.reject(new Error(`无效的source：${source}`));
  }

  return new Promise((resolve, reject) => {
    Metalsmith(process.cwd())
      .metadata(metadata) //metadata 为用户输入的内容
      .clean(false)
      .source(source + "/template") //模板文件 path
      .destination(destination) //最终编译好的文件存放位置
      .use(prompts(questions))
      .use((files, metalsmith, done) => {
        Object.keys(files).forEach(fileName => {
          //遍历替换模板
          if (checkFile(fileName)) {
            //判断是否为字体文件，字体文件不用替换
            const fileContentsString = files[fileName].contents.toString(); //Handlebar compile 前需要转换为字符创
            try {
              files[fileName].contents = new Buffer(
                Handlebars.compile(fileContentsString)(metalsmith.metadata())
              );
            } catch (error) {
              console.log("error", fileName, checkFile(fileName));
              console.error(error);
            }
          }
        });
        done();
      })
      .build(err => {
        // build
        rm(source); //删除下载下来的模板文件，‘source’是路径
        if (err) {
          console.log(chalk.red(`Metalsmith build error: ${err}`));
          return reject(err);
        } else {
          return resolve();
        }
      });
  });
};
