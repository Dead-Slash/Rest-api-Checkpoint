const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  image: String,
},
{timestamps:true});

module.exports = mongoose.model("users", user_schema);
