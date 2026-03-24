const express = require("express");
const livrosRoutes = require("./routes/routes.livros");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API Online e Funcionando!" });
});

app.use("/livros", livrosRoutes);

module.exports = app;