const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Kindly provide the name of the event"],
  },
  description: {
    type: String,
    required: [true, "Kindly provide the description of the event"],
    minlength: [20, "Description shall atleast be of 20 words"],
    maxlength: [200, "Description shall not cross over 200 words"],
  },
  image: {
    type: String,
  },
  formLink: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
