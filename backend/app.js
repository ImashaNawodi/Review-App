const express =require('express');
const UserRouter =require('./routes/user')
const app =express();
//convert everything coming form the json format
app.use(express.json());
app.use('/api/user',UserRouter);
//MVC 

app.get('/about',(req,res)=>{
    res.send("<h1>Hello </h1>");
})

app.listen(8000,() => {
    console.log("The port is listenning to the port 8000")
});