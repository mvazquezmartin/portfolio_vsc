import 'colors';
import express from 'express';
import appConfig from './config/app.config.js';
import { setSocket } from './config/socket.config.js';
import router from './router/index.js';
import mongoConnect from '../database/index.js';
import __dirname from './utils/dirname.util.js';

const { PORT } = appConfig
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// router(app);
app.use(router)

const httpServer = app.listen(PORT, () => {
  console.log('Server started on PORT:'.green, PORT.cyan);
});

mongoConnect();
setSocket(httpServer);

export default app;
