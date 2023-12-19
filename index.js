// ------File Based-----

// const a = 400;

// module.exports = a;


// const a = {
//     average: (a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent: (a,b)=>{
//         console.log((a/b)*100);
//     },
// }

// module.exports = a;


// -----Build In ------ Asynchronous Way 

// const fs  = require("fs");

// fs.readFile("./sample.txt","utf-8",(err,data)=>{    // here i write utf-8 because it will change to normal text from buffer.You can check without write it.
//     if(err){
//         throw err;    //--- you can write return or throw. there are no problem.
//     }
//     console.log(data);
// });

// console.log("Hey buddy I am first.");


// ------ Synchronous way------
// const fs = require("fs");
// const a = fs.readFileSync("./sample.txt","utf-8");

// console.log(a);
// console.log("Hey buddy I am the first");


// ---------Write file ----------

// const fs = require("fs");
// const b = "this is learning by 6 pack programmer.";

// fs.writeFile("./sample2.txt",b,(err,data)=>{
//     console.log("written");
// });
// console.log("Hey I am the first");



// const fs = require("fs");
// const b = "this is learning by 6 Pack Programmer.";

// fs.writeFileSync("./sample2.txt",b);
// console.log("Hey I am the first");



// -----------path---------
// const path = require("path");
// const a = path.extname("/node/index.js");
// console.log(a);


// ----- OS-------
// const os = require("os");
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.hostname());