const ora = require("ora");
const downloadgit = require("download-git-repo");
const exists = require("fs").existsSync;
const logger = require("../lib/logger");
const rm = require("rimraf").sync;
const localPath = require("../lib/local-path");
const getPath = localPath.getTemplatePath;

module.exports = function download(template, tmp) {
  const spinner = ora("downloading template");
  let tmppath = getPath(tmp);
  spinner.start();
  // Remove if local template exists
  if (exists(tmppath)) rm(tmppath);
  return new Promise((resolve, reject) => {
    downloadgit(template, tmppath, err => {
      if (err) {
        spinner.fail(
          `Failed to download repo ${template}: ${err.message.trim()} `
        );
        reject(err);
      } else {
        spinner.succeed();
        logger.success("init project succeed! please run command:");
        logger.info("");
        logger.success(`$ cd ${tmppath}\n$ npm install`);
        logger.info("");
        resolve(tmppath);
      }
    });
  });
};
