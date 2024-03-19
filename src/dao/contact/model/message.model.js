import mongoose from "mongoose";

const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: String,
});

const Messages = mongoose.model(messagesCollection, messagesSchema);

export default Messages;
