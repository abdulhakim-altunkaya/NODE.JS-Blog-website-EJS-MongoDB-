const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  },
  input3: {
    type: String,
    required: true
  },
  input4: {
    type: String
  },
  input5: {
    type: String
  },
  input6: {
    type: String
  }
});

const A1Model = mongoose.model("a1comment", UserSchema);
const A2Model = mongoose.model("a2comment", UserSchema);
const A3Model = mongoose.model("a3comment", UserSchema);
const A4Model = mongoose.model("a4comment", UserSchema);
const A5Model = mongoose.model("a5comment", UserSchema);
const UserModel = mongoose.model("user", UserSchema);
module.exports = {
    A1Model, A2Model, A3Model, A4Model, A5Model, UserModel
}
