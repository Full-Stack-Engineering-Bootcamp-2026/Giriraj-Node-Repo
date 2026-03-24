const http=require('http');
const express=require('express')
const app=express();


app.get('/',(req,res)=>{
   res.send('Welocme to ExpressJs server');
});
app.get("/about",(req,res)=>{
    
    res.send('I am learning backend development using Express Js,which is part of my learning journey')
})
app.get('/contact',(req,res)=>{
   // console.log("2nd app .use");
    res.send('Name:Giriraj Thanvi  Batch:Cdac');
});

app.get('/skills',(req,res)=>{
    
    res.send(`<h1>My skills</h1>
        <ul>
           <li>Java</li>
           <li>JavaScript</li>
           <li>NodeJs</li>
           <li>ReactJs</li>
        </ul>
        
        `);
})

// const a=http.createServer(app);
// a.listen(3000);
app.listen(3000);