const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Ch4riz@rd",
    database: "ECommAddtoCart_2"
})

connection.connect(function(error){
    if(error) console.log("error in connection = ",error);
})


module.exports = connection;