const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys')
const Items=require('./routes/api/items')
const app=express();
const path=require('path');


app.use(express.json());

//Connect Mongo
mongoose.connect(keys.mongoURI,{useNewUrlParser:true,useCreateIndex:true})
.then(()=>{console.log('connected to mongo DB')})
.catch(err=>console.log(err));

//Use Routes
app.use('/api/items',Items);

//Serve Static assets if  in Production

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Port Connected on Port:${port}`));