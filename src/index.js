const express = require("express");
const { PORT } = require("./config/app.config");
const setSocket = require("./config/socket.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

const httpServer = app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

setSocket(httpServer);
