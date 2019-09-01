const handlebars = require('handlebars');

var surce = '# {{name}}\n## {{description}}';
var template = handlebars.compile(surce);
var data = {
  name: 'Vue project',
  description: 'test description'
};
var result = template(data);

console.log(result);
