import 'dotenv/config';
import express from 'express';
const app = express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send(`welcome agian`);
});

app.get("/about",(req,res)=>{

    res.send("i'm vijay");
})
app.get("/about/age",(req,res)=>{

    res.send("22");
})
app.listen(process.env.PORT,()=>{
console.log(`server is rinning in port http://localhost:${PORT}`);
})