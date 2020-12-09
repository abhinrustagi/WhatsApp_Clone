const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nanoid: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
