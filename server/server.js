const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

require("dotenv").config();
const { DATABASE_URL } = process.env;

const controllerFile = require("./controller");

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

// endpoints go below

app.post("/watchlist", controllerFile.addStock);
app.get("/watchlist", controllerFile.getStock);
app.delete("/watchlist", controllerFile.removeStock);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`running on ${port}`));
