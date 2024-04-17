const express = require("express");
const {database} = require("../config/db")

const favRouter = express.Router();

favRouter.get("/",(req,res)=>{
    try{
        const query = "SELECT * FROM favourite";

        database.query(query,[], (err,result)=>{
            if(err){
                console.log("error while getting data");
            }
            else{
                res.status(200).send(result);
            }
        });
    }
    catch(err){
        res.status(200).send({err});
    }
});




favRouter.post("/",(req,res)=>{
    try{
        const query = "INSERT INTO post(id, poster, title, types, year) VALUES(?,?,?,?,?)";

        const {id, poster, title, types, year} = req.body;
        database.query(query,[id, poster, title, types, year], (err,result)=>{
            if(err){
                console.log("error while posting data",err);
            }
            else{
                res.status(200).json({msg:"Successfuly post the posts"});
            }
        });
    }
    catch(err){
        res.status(200).send({err});
    }
});


module.exports = {
    favRouter
}