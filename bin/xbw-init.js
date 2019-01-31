#!/usr/bin/env node

const program = require("commander");
const exists = require("fs").existsSync;
const ora = require("ora");

const localPath = require("../lib/local-path");
const getPath = localPath.getTemplatePath;
const logger = require("../lib/logger");

const uis = ["iview", "museui", "element-ui"];
function oneOf(type) {
  return uis.indexOf(type) > -1;
}
//
let uitype, projectName;
program
  .usage("init [ui-type] [projectName]", "ui-type required")
  .arguments("<uitype> <projectName>")
  .action(function(ag1, ag2) {
    uitype = ag1;
    projectName = ag2;
  })
  .parse(process.argv);
program.on("--help", function() {
  logger.info("");
  logger.info("ui-type:");
  logger.info("  " + uis);
  logger.info("");
  logger.info("Examples:");
  logger.info("   $ xbw init museui my-project");
});
if (!uitype && !projectName) {
  program.help();
}
if (uitype && !oneOf(uitype)) {
  logger.error(`ui muse be one of ${uis}`);
  process.exit(0);
}
if (projectName) {
  let projectPath = getPath(projectName);
  if (exists(projectPath)) {
    logger.error(`current project dir is exists`);
  } else {
    const spinner = ora("init project");
    spinner.start();
    setTimeout(() => {
      //下载模板
      spinner.succeed();
    }, 2000);
  }
}
