const mongoose = require("mongoose");
const { DB_ADMIN, DB_PASSWORD, DB_HOST } = require("../src/config/db.config");

const url = `mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("db is coneccted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnect;
