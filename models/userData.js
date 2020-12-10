const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = Schema({
  nanoid: String,
  friends: [],
  chatRooms: [],
});

module.exports = mongoose.model("userdata", userData);
