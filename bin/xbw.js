#!/usr/bin/env node

const program = require("commander");
const logger = require("../lib/logger");

program
  .version(require("../package.json").version)
  .description("init kinds of vue projects")
  .usage("<command> [option]")
  .command("init", "init a vue project with choosed ui");
// other command
//.command('name', 'description')

//lisenter event
program.on("command:*", function(args) {
  let cmd = args[0];
  console.log(cmd);
  if (["init"].includes(cmd)) {
  } else {
    logger.error(`Invalid command: ${program.args.join(" ")}`);
    process.exit(1);
  }
});
program.parse(process.argv);
