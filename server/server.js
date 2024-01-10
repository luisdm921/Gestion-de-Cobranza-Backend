const express = require("express");
const cors = require("cors");

const app = express();
const datos = require("./data");

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3003;

app.get("/api/Oficinas", (req, res) => {
  res.json(datos.oficinas);
});
app.get("/api/Agentes", (req, res) => {
  res.json(datos.agentes);
});
app.get("/api/Ejecutivos", (req, res) => {
  res.json(datos.ejecutivos);
});

app.listen(PORT, () => {
  console.log(`Servidor REST en ejecución en el puerto ${PORT}`);
});
