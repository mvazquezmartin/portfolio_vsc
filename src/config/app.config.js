import * as dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  MY_API_KEY: process.env.MY_API_KEY,
};
