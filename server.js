const express  = require ("express");
const path = require ("path");
const connectDB = require ("./DB/connection");
const { A1Model, A2Model, A3Model, A4Model, A5Model, UserModel } = require('./DB/user');
const app = express();

connectDB();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));
app.use(function(err, req, res, next){
  res.send(422);
  res.send({error: err.message});
})

app.get("/", function(req, res){
  res.render("index");
});

app.get("/ejs1", function(req, res){
  res.render("ejs1");
});
app.get("/test1", function(req, res){
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});
app.get("/test2", function(req, res){
  res.send("Just a simple string");
});
app.get("/test3", function(req, res, next){
  UserModel.find({}).then(function(records){
    res.send(records);
  });
});
app.get("/test4", function(req, res, next){
  UserModel.find({input1: "Bekin"}).then(function(records){
    res.send(records);
  }).catch(next);
});
app.get("/test5", function(req, res, next){
  UserModel.find({}).sort({_id:-1}).then(function(records){
    res.render("comment2", {personal_data: records})
  }).catch(next);
});



app.get("/contact", function(req, res, next){
  UserModel.find({}).sort({_id:-1}).then(function(records){
    res.render("comment", {personal_data: records})
  }).catch(next);
});


app.post("/contact", function(req, res, next){
  UserModel.create(req.body).then(function(){
    UserModel.find({}).sort({_id:-1}).then(function(records){
      res.render("comment", {personal_data: records})
    }).catch(next);
  });
});

app.get("/coding-skills", function(req, res, next){
  A1Model.find({}).sort({_id:-1}).then(function(records){
    res.render("a1_coding", {personal_data: records})
  }).catch(next);
});

app.post("/coding-skills", function(req, res, next){
  A1Model.create(req.body).then(function(){
    A1Model.find({}).sort({_id:-1}).then(function(records){
      res.render("a1_coding", {personal_data: records})
    }).catch(next);
  });
});

app.get("/python-constructor", function(req, res, next){
  A2Model.find({}).sort({_id:-1}).then(function(records){
    res.render("a2_python", {personal_data: records})
  }).catch(next);
});

app.post("/python-constructor", function(req, res, next){
  A2Model.create(req.body).then(function(){
    A2Model.find({}).sort({_id:-1}).then(function(records){
      res.render("a2_python", {personal_data: records})
    }).catch(next);
  });
});

app.get("/deploying-nodejs", function(req, res, next){
  A3Model.find({}).sort({_id:-1}).then(function(records){
    res.render("a3_nodejs", {personal_data: records})
  }).catch(next);
});

app.post("/deploying-nodejs", function(req, res, next){
  A3Model.create(req.body).then(function(){
    A3Model.find({}).sort({_id:-1}).then(function(records){
      res.render("a3_nodejs", {personal_data: records})
    }).catch(next);
  });
});

app.get("/python-pie", function(req, res, next){
  A4Model.find({}).sort({_id:-1}).then(function(records){
    res.render("a4_pie", {personal_data: records})
  }).catch(next);
});

app.post("/python-pie", function(req, res, next){
  A4Model.create(req.body).then(function(){
    A4Model.find({}).sort({_id:-1}).then(function(records){
      res.render("a4_pie", {personal_data: records})
    }).catch(next);
  });
});

app.get("/broken-image-nodejs", function(req, res, next){
  A5Model.find({}).sort({_id:-1}).then(function(records){
    res.render("a5_nodejs_image", {personal_data: records})
  }).catch(next);
});

app.post("/broken-image-nodejs", function(req, res, next){
  A5Model.create(req.body).then(function(){
    A5Model.find({}).sort({_id:-1}).then(function(records){
      res.render("a5_nodejs_image", {personal_data: records})
    }).catch(next);
  });
});


const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
console.log("ПОРТ СЕИЧАС ОТКРЫТ "+portNumber);
