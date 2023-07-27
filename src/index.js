const express = require("express");
const { PORT } = require("./config/app.config");
const { setSocket } = require("./config/socket.config");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

router(app);

const httpServer = app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

setSocket(httpServer);
