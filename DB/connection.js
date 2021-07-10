const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = "mongodb+srv://abdulhakim:seattle1@cluster0.j3afp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.set('useCreateIndex', true);
const connectDB = async() => {
  await mongoose.connect(url, connectionParams);
  console.log("db connected sir");
};
module.exports = connectDB;
