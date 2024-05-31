const connectToMongo = require("./db");
var cors = require("cors");
connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Models
app.use("/api/model_details", require("./routes/models"));

// user
app.use("/api/auth", require("./routes/auth"));
