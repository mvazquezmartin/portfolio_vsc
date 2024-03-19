import * as dotenv from 'dotenv';

dotenv.config();

export default {
  DB_ADMIN: process.env.DB_ADMIN,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
};
