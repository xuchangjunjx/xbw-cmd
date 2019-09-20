var spawn = require('child_process').spawn;
const cmd = `cd ./my-project && npm i && npm run serve`;
var child = spawn(cmd, {
  shell: true
});
child.stderr.on('data', function(data) {
  console.error(data.toString());
});
child.stdout.on('data', function(data) {
  console.log(data.toString());
});
child.on('exit', function(exitCode) {
  console.log('Child exited with code: ' + exitCode);
});
