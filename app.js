const express = require("express");
const app = express();
// const db = require("./db/conection");

const PORT = 3000;

app.listen(PORT, function () {
  console.log("O Express esta rodando na porta ${PORT}");
});
// ROTA

app.get("/", (req, res) => {
  res.send("Esta funcionado nodemom 2022");
});
