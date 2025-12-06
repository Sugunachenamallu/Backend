import express from 'express';
const app=express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("api success");
});
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data added");
});
app.put('/edit-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data edited");

})
    app.delete('/delete-user', (req, res) => {
    let data = req.body;     
    console.log(data);
    res.send("user deleted");
});



app.listen(3000,()=>{
    console.log("server running at port 3000");
});