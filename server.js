const express  = require ("express");
const path = require ("path");
const connectDB = require ("./DB/connection");
const app = express();

connectDB();


app.get("/test1", function(req, res){
  res.send("It is very very very really working dude");
});
app.get("/test", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});

const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
console.log("ПОРТ СЕИЧАС ОТКРЫТ "+portNumber);
