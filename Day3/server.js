const http=require('http');

const server=http.createServer((req,res)=>{
   const url=req.url;
   const method=req.method;
   console.log(`${req.method} ${req.url}`);
   if(url==='/' && method==='GET')
   {
     res.writeHead(200,{'Content-Type':'text/HTML'});
     res.write(`<html>`);
     res.write(`<head><title><h1>HomePage for GET</h1></title></head>`);
     res.write(`<body><a href="/about">HomePage for GET</a></head></title>`);
     res.write(`</html>`);
     return res.end();
   }
   if(url==='/' && method==='POST')
   {
     res.writeHead(200,{'Content-Type':'text/HTML'});
     res.write(`<html>`);
     res.write(`<head><title><h1>HomePage for Post</h1></title></head>`);
     res.write(`<body><p>HomePage for Post<p></body>`);
     res.write(`</html>`);
     return res.end();
   }
   
    else if(url==='/about' && method==='GET')
   {
    res.writeHead(200,{'Content-Type':'text/HTML'});
     res.write(`<html>`);
     res.write(`<head><title><h1>Giriraj Thanvi</h1></title></head>`);
     res.write(`<body><h1>This is about page,Giriraj Thanvi<h1></body>`);
     res.write(`</html>`);
     return res.end();
   }
     else if(url==='/redirect' && method==='GET')
   {
     res.writeHead(302,{Location:'/'});
    
     res.end();
   }
   else if(url==='/time' && method==='GET')
   {
    
     res.writeHead(200,{'Content-Type':'application/json'});
    
     return res.end(JSON.stringify({currentTime:new Date().toLocaleString()}));
   }
   else{
res.writeHead(404,{'Content-Type':'text/HTML'});
   res.end(`
           <html>
                <body>
                    <h1>404-Page Not Found</h1>
                    <a href="/">Go HomePage</a>
                </body>
              </html>
              `);              
              } 
});


server.listen(3000);
