const {database} = require ("../config/db");

function ensureTable(req,res,next){
    const query = `CREATE TABLE IF NOT EXISTS favourite(
        id INT PRIMARY KEY,
        poster VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        types VARCHAR(255) NOT NULL,
        year VARCHAR(255) NOT NULL
    )`

    database.query(query,[], (err,result) => {
        if(err){
            console.log("Error in ncreating table",err);
        }
        else{
            console.log("table created");
            next();
        }
    })
}

module.exports = {
    ensureTable
}