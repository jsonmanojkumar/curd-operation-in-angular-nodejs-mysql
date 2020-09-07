var mysql=require("mysql");

const   connection=mysql.createConnection({
host:'localhost',
port:3306,
user:'root',
password:'',
database:'test'
})

connection.connect(function(err){
    if(err) throw err
    console.log("Database Connected successfully Running  Port On localhost:3000");
})
module.exports=connection;