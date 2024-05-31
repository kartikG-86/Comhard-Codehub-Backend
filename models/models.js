const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModelDetailSchema = new Schema({
  key: {
    type: String,
  },
  details: [],
  description: { type: String },
  example: { type: String },
  timestamp: { type: String },
  desc: { type: String },
  default: { type: String },
  default_value: { type: String },
  type: { type: String },
});

const ModelsDetails = mongoose.model("models", ModelDetailSchema);
module.exports = ModelsDetails;
