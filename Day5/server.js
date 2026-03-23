const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(`Request received:${req.url}`);
    if(req.url==="/api"){
        res.writeHead(200,
        {"Content-Type":"application/json"});
        const data={
            name:"Giriraj",
            message:"Hi,Giriraj Thanvi",
            date:new Date().toLocaleString()
        };
        res.end(JSON.stringify(data));
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            const todayDate=new Date().toLocaleString();
            res.end(`
                <html>
                  <head>
                       <title>My Server</title>
                  </head>
                  <body>
                  <h1>Giriraj Thanvi</h1>
                  <p>Today's Date:${todayDate}</p>
                  </body>
                </html>  
                `);
        }
   });
   server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
   })    

    