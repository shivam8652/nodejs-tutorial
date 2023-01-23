const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// creating file
fs.writeFileSync(filePath,"This is a simple text file");

// reading file
fs.readFile(filePath,'utf-8',(err,item)=>{
console.log(item);
});

// updating file
fs.appendFile(filePath,"and file name is apple.txt",(err)=>{
   if (!err) console.log("file is updated");
});

// renaminig file
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file name is updated");
});

// deleting file
fs.unlinkSync(`${dirPath}/fruit.txt`);