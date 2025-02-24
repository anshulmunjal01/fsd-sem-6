import express from 'express';

const app = express();

app.get('/',(request,response)=>{
    response.send("Hello CE Students");
});
app.get('/api/:name/:age',(req,res)=>{
    try {
        const data = req.params;
        res.send(`Hello dear CE Student ${data.name} and your age is ${data.age}`);
    } catch (error) {
        console.log(error.message);
    }
});
//http://localhost:3000/api?name=Anshul&rollno=14
app.get('/api',(request,response)=>{
    try {
        const {name, rollno} = request.query;
        if(!name){
            response.send({
                status: 404,message:"name is required"
            });
        }
        else{
            response.send(`User name is ${name} and roll no. is ${rollno}`);
        }
    } catch (error) {
        console.log(error.message)
    }
});


const port=3000;
app.listen(port,()=>{
    console.log(`server runnung at http://localhost:${port}`)
});