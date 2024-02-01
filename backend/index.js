const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
const products = require("./products");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to API");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server Running on port ${port}`));
