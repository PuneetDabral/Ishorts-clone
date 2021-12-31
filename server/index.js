//es6 syntex
import express  from "express";
import core from 'cors';
import bodyParser from "body-parser";

//component import
import connection from "./connection/db.js";
import defaultdata from "./default.js";
import Route from "./routes/route.js";


const app =express();
app.use(core());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))

app.use('/',Route);

//create server
const PORT=1000;
connection();
app.listen(PORT, ()=>{
    console.log(`server is running on Port :${PORT}`);
})

defaultdata();