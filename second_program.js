const app = require('./temp.js'); //importing data from temp.js

// declaring variable
var x = 20;

// if condition
if(x === 20){

    console.log("Matched");
}

// for loop condition
for(i = 0; i < 10; i++){

    console.log(i);
}

// creating array
const arr = [2,4,7,1,3,8,3];
console.log(arr);
console.log(arr[0]); // printing first value of array
console.log(app.x,app.y); // printing x and y from temp.js 
console.log(app.z()); // calling function from temp.js

// filter function 
let result = arr.filter((item)=>{
  return item === 3;
});
console.log(result);