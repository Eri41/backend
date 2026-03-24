const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O Servidor está funcionando em http://localhost:${PORT}`);
});