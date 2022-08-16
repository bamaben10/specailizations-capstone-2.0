const express = require("express");
const cors = require("cors");

const app = express();

// const controllerFile = require("./controller");

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

// endpoints go below

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`running on ${port}`));
