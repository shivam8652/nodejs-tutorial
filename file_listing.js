// creating multiple files using loop and reading file from directory 

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

for(i = 0; i < 5; i++){

   fs.writeFileSync(`${dirPath}/hello${i}.txt`,"a simple text file");

}

fs.readdir(dirPath,(err,items)=>{
    items.forEach((values,idx)=>{
         console.log(values);
    });
});

