const Metalsmith = require('metalsmith');
const handlebars = require('handlebars');

function hanldeFiles(files, metalsmith, done) {
  Object.keys(files).forEach(fileName => {
    console.log(fileName);
    const fileContentsString = files[fileName].contents.toString(); // Handlebar compile 前需要转换为字符创
    try {
      files[fileName].contents = Buffer.from(
        handlebars.compile(fileContentsString)(metalsmith.metadata())
      );
    } catch (error) {
      console.error(error);
    }
  });
  done();
}
const metadata = {
  name: 'Vue project',
  eslint: false
};
Metalsmith(process.cwd())
  .metadata(metadata)
  .source('./test/testfiles')
  .destination('./test/build')
  .use(hanldeFiles)
  .build(err => {
    console.log(err);
  });
