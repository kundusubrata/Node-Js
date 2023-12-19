// const http = require("http");

// const port = 80;
// const hostname="localhost";

// const server = http.createServer((req,res)=>{

//     res.end("<h1>Heloo World</h1>");
// })

// server.listen(port,hostname, ()=>{
//     console.log(`Server is working on http://${hostname}:${port}`);
// })


//----------- Deploy via nodemon server ----------


// const http = require("http");
// const fs = require("fs");
// const port = 3000;
// const hostname = "localhost";

// const home = fs.readFileSync("./home.html","utf-8");
// const about = fs.readFileSync("./about.html","utf-8");
// const contact = fs.readFileSync("./contact.html","utf-8");
// const service = fs.readFileSync("./service.html","utf-8");

// const server = http.createServer((req,res)=>{
//     // console.log(req.url);
//     if(req.url==="/"){
//         return res.end(home);
//     }
//     if(req.url==="/about"){
//         return res.end(about);
//     }
//     if(req.url==="/contact"){
//         return res.end(contact);
//     }
//     if(req.url==="/service"){
//         return res.end(service);
//     }
//     else{
//         return res.end("<h1>404 Page not found</h1>");
//     }
// });

// server.listen(port,hostname,()=>{
//     console.log(`Server is working on http://${hostname}:${port}`);
// });


// ------------Deploy via vercel/ render-----------

const http = require("http");
const fs = require("fs");
const port = process.env.port;

const home = fs.readFileSync("./home.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");
const service = fs.readFileSync("./service.html","utf-8");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/"){
        return res.end(home);
    }
    if(req.url==="/about"){
        return res.end(about);
    }
    if(req.url==="/contact"){
        return res.end(contact);
    }
    if(req.url==="/service"){
        return res.end(service);
    }
    else{
        return res.end("<h1>404 Page not found</h1>");
    }
});

server.listen(port,()=>{
    console.log(`Server is working.`);
});