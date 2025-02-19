const http = require('http');
const fs=require('fs/promises');
const server =http.createServer(async(req,res)=>{
res.writeHead(200,{'content-type': 'application/json'});
const filedata=await fs.readFile("./aa.json",'utf8');
// const newdata= users.map((user)=>{
//     return user.name
// });
// let newdata= "";
// users.forEach((user)=> {
//     newdata +=`$(user.name)`;
// });
const parsedata=JSON.parse(filedata);
res.end(JSON.stringify(parsedata));
});
PORT=3000;
server.listen(PORT,()=>{
    console.log('server is running on port');
});