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

app.get("/test10", function(req, res){
  UserModel.findOne({"input1": "Maksut"}).then(function(records){
    res.send(records)
  });
});
app.get("/test11", function(req, res){
  UserModel.find({$text: {$search: "Maksut"}}).then(function(records){
    res.send(records)
  });
});
app.get("/test12", function(req, res){
  UserModel.findOne({$text: {$search: "Elenos"}}).then(function(records){
    res.send(records.input3)
  });
});
app.get("/test13", function(req, res){
  UserModel.findOne({}, {_id:0, __v:0}).then(function(records){
    res.send(records)
  });
});
app.get("/test14", function(req, res){
  UserModel.findOne({"input1": "Elenos"}, {_id:0, __v:0}).then(function(records){
    res.send(records.input3);
  });
});
app.get("/test15", function(req, res){
    res.render("test15");
});

app.post("/test15", function(req, res){
  const wordx = req.body.input1;
    UserModel.findOne({"input1": wordx}).then(function(records){
      if (records === null) {
        UserModel.findOne({"input2": wordx}).then(function(records){
          if (records === null) {
            res.send("no result anywhere");
          } else {
            res.send(records.input3 +"    MUHAHAHAHAH      "+ records.input2);
          };
        });
      } else {
        res.send(records.input3 +" ,,,,,,,,,,,,, "+ records.input2);
      };
    });
});

app.get("/test16", function(req, res){
    res.render("test16");
});
app.post("/test16", function(req, res, next){
  const wordx = req.body.input1;
  UserModel.findOne({$text: {$search: wordx}}).then(function(records){
    if (records === null) {
      res.render("error.ejs", {wordx});
    } else {
      res.render("test17", {records});
    }
  });
});
app.get("/test18", function(req, res){
    res.render("test18");
});

app.post("/test18", function(req, res){
  const wordx = req.body.input1;
    UserModel.findOne({"input1": wordx}).then(function(records){
      if (records === null) {
        UserModel.findOne({"input2": wordx}).then(function(records){
          if (records === null) {
            res.render("error.ejs", {wordx});
          } else {
            res.render("test19", {records});
          };
        });
      } else {
        res.render("test19", {records});
      };
    });
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
