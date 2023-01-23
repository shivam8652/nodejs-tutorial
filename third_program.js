// loading file system in node.js
const fs = require('fs');
fs.writeFileSync("Hello.txt","code step by step");

// printing directory name
console.log(__dirname);

// printing file name
console.log(__filename);

// importing a particular file system function 
const fs1 = require('fs').writeFileSync;
