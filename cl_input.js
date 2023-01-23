// getting input from console and storing data into file

//importing all the required modules
const fs = require('fs');

const input = process.argv; // getting input from terminal 

if(input[2] == 'add'){

   fs.writeFileSync(input[3],input[4]);

}
else if(input[2] == 'remove'){

   fs.unlinkSync(input[3]);

}
else{

 console.log("invalid input");

}

/* NOte:
1) For creting file pass this input into terminal :
   node cl_input.js add 'file_name.txt' 'data which you want to store into file'

2) For deleting file pass this input into terminal :
   node cl_input.js remove 'file_name.txt'
*/