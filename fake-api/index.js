import express from "express" ; 
const app =express() ; 
import cors from "cors" ; 


app.use(express.json()) ; 
app.use(cors());
app.get("/api/getinfo",(req,res)=>{
    res.send("you got it 🚀")
})
app.post("/api/users/update",(req,res)=>{

    setTimeout(()=>{

        
        res.send(req.body) ; 
    },[2000])
})

app.listen(8800 , ()=>{
    console.log("connected to server.....") ; 
})