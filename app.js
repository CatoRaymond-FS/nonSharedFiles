require("dotenv").config("./.env")

const SECRET_KEY = "your_secret_key_here";


console.log("Secret key:", SECRET_KEY);

const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;

const fs = require("fs")
let directory_name = "./"
let filenames = fs.readdirSync(directory_name)

const server = http.createServer((req,res) => {

   res.status = 200;
    res.setHeader("Content-Type", "text/plain");

    f = ""
    filenames.forEach((file)=>{
        f = f +file+" \n";
    })
    res.end(f)
    
 });
server.listen(port, hostname, ()=>{})