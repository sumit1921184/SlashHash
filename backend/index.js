const express = require("express");
const cors = require("cors");

const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({msg:"this is home route"});
})

app.listen(process.env.port,()=>{
    console.log(`app is running on port ${process.env.port}`)
})