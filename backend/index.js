const express = require("express");
const cors = require("cors");
const {database} = require("./config/db");
const {ensureTable} = require("./middlewares/favourite.middlewares");
const {favRouter} = require("./routes/favourite.routes");
const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use("/favourite",ensureTable,favRouter);

app.get("/",(req,res)=>{
    res.status(200).json({msg:"this is home route"});
})

app.listen(process.env.port,()=>{
    database.connect((err)=>{
        if(err){
            console.log("we got error while connectioin with databse",err);

        }
        else{
            console.log("connected to database");
        
        }
        console.log("app is running");
    })
})