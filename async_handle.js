let a = 20;
let b = 0;



let waiting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b = 30;
        resolve(b);
    },2000);
});

waiting.then((result)=>{
    b = result;
  console.log(a+b);
}).catch((err)=>{
    console.log(err);
});