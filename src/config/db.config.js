require("dotenv").config({path:'../.env'});

module.exports = {
  DB_ADMIN: process.env.DB_ADMIN,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
};
