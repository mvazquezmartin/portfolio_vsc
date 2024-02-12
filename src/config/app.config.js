require("dotenv").config({path:'../.env'});

module.exports = {
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  MY_API_KEY: process.env.MY_API_KEY
};
