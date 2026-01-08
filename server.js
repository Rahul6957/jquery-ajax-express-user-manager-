const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

var dbserver={
    host: "localhost",
    user: "root",
    password: "password",
    database: 'userdb'
}
var connection=mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+err)
    }
    else{
        console.log("Connection Sucessfulll." )
    }
});

// GET users
//app.get("/users", (req, res) => {
 // res.json(users);
//});

// ADD user
//app.post("/users", (req, res) => {
 // const { name } = req.body;
 // users.push({ id: users.length + 1, name });
  //res.json({ message: "User added" });
//});

//READ
app.get('/users',(req,res)=>{
    const sql= "SELECT * FROM users";
    connection.query(sql,(err,result)=>{
        if(err) return res.status(500).json({error:err});
        res.json(result);
        console.log("Record Displayed...");
    });
});

app.post('/users', (req, res) => {
    const { name} = req.body;
    const sql = "INSERT INTO users (name) VALUES (?)";
    connection.query(sql, [name], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User added successfully", name: result.insertId });
        console.log("Data inserted in DB..");
    });
});

app.listen(6950, () => {
  console.log("Server running on http://localhost:6950");
});
