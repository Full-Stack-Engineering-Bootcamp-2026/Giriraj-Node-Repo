const fs=require('fs');
const path=require('path');
function routes(req,res){
    if(req.method==='GET' && req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`
            <html>
            <body>
              <h2>Submit Form</h2>
              <form action="/submit" method="POST">
              <input type="text" name="name" placeholder="Enter Name" required/><br></br>
              <textarea name="message" placeholder="Enter Message" required></textarea><br><br>
              <button type="submit">Submit</button>
              </form>
              </body>
              </html>
            `);
        }
        else if(req.method==='POST'&&req.url==='/submit')
        {
            let body='';
            req.on('data',chunk=>{
                body+=chunk.toString();
            });
            req.on('end',()=>{
                const params=new URLSearchParams(body);
                const name=params.get('name');
                const message=params.get('message');

                console.log("Received Data:");
                console.log("Name",name);
                console.log("Message:",message);

                const filePath=path.join(__dirname,'messages.json');
                fs.readFile(filePath,'utf8',(err,data)=>{
                    let messages=[];
                  
                        try{
                            const parsed=JSON.parse(data);
                            if(Array.isArray(parsed))
                            {
                                messages=parsed;
                            }
                            else{
                                messages=[];
                            }
                        }
                        catch(e){
                            messages=[];
                        }
                        
                       
                    messages.push({name,message});
                    console.log("Saving:",messages);

                    fs.writeFile(filePath,JSON.stringify(messages,null,2),(err)=>{
                        if(err){
                            console.log("Error writing the file:",err);
                        }
                        else{
                        console.log("Data saved to message");
                        
                        res.writeHead(302,{Location:'/'});
                res.end();}
                    }
                );
                    });
                });
                
       
        }
        else if(req.method==='GET' && req.url==='/messages'){
            const filePath=path.join(__dirname,'messages.json');
            fs.readFile(filePath,'utf8',(err,data)=>{
                let messages=[];
                if(!err && data)
                {
                    messages=JSON.parse(data);
                }
                res.writeHead(200,{'Content-Type':'text/html'});
                let html=`<h2>Saved Messages</h2>`;
                messages.forEach(msg=>{
                    html+=`<p><b>${msg.name}</b>:${msg.message}</p>`;
                });
                html+=`<br><a href="/">Go Back</a>`;
                res.end(html);
            });
        }
        else{
            res.writeHead(404);
            res.end('Page Not Found');
        }

    }
module.exports=routes;