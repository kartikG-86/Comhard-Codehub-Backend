const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/comhard_codehub";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then((success) => console.log("Connected Successfully"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
