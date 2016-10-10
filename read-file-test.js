var inputFile = process.argv[2];
var fs = require("fs");

fs.readFile(inputFile, function(err, data) {
  if (err) {
    return console.error(err);
  }
  var readContent = data.toString();
  console.log(readContent);
});