const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http").createServer(app);
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/api/users", users);

http.listen(process.env.PORT || 8888, () => {
  console.log("Server started.");
});
