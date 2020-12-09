const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http").createServer(app);
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/users/login", (req, res) => {
  res.send("Oi there mate");
});

app.post("/api/users/register", (req, res) => {
  console.log(req.body);
  res.send("Oi there mate");
});

http.listen(process.env.PORT || 8888, () => {
  console.log("Server started.");
});
