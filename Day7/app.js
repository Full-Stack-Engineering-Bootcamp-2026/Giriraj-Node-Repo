
const express=require('express')
const app=express();

app.use((req,res,next)=>{
    console.log((`Request Method:${req.method},URL:${req.url}`));
    next();
})
app.use((req,res,next)=>{
    console.log(("Welcome to My Express App"));
    next();
})
app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1>`)
})
app.get('/users',(req,res)=>{
   res.send(`<h1>Users Page</h1>`)
})
app.get('/products',(req,res)=>{
   res.send(`<h1>Product Page</h1>
    <p>This is Product page</p>
    
    `);
});


// const a=http.createServer(app);
// a.listen(3000);
app.listen(3000);