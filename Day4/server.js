const http=require('http');
const routes=require('./routes');

const server=http.createServer((req,res)=>{
    routes(req,res);
});

const PORT=3000;

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});