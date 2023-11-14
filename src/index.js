require("colors");
const express = require("express");
const { PORT } = require("./config/app.config");
const { setSocket } = require("./config/socket.config");
const router = require("./router");
const mongoConnect = require("../database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

router(app);

const httpServer = app.listen(PORT, () => {
  console.log("Server started on PORT:".green, PORT.cyan);
});

mongoConnect();
setSocket(httpServer);
