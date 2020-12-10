const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http").createServer(app);
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require("passport");
const io = socketio(http, {
  cors: {
    origin: "*",
  },
});

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

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    console.log("joined");
  });

  socket.on("message", (message) => {
    console.log(message);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/api/users", users);

app.get("/api/users/chats", (req, res) => {
  console.log(req.body);
  res.json("None");
});

http.listen(process.env.PORT || 8888, () => {
  console.log("Server started.");
});
