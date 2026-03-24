const express = require("express");
const router = express.Router();
const livros = require("../data/livros");

// Listando todos os livros
router.get("/", (req, res) => {
  res.json({
    sucesso: true,
    quantidade: livros.length,
    dados: livros
  });
});

// Busvar livros por código ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(item => item.id === id);

  if (!livro) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "O livro não foi encontrado"
    });
  }

  res.json({
    sucesso: true,
    dados: livro
  });
});

module.exports = router;