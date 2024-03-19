import "colors";
import mongoose from "mongoose";
import dbConfig from "../src/config/db.config.js";

const { DB_ADMIN, DB_PASSWORD, DB_HOST } = dbConfig

const url = `mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("mongoDb is coneccted".green);
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
