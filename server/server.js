const express = require("express");
const cors = require("cors");

require("dotenv").config();

const pokemonRoutes = require("./routes/pokemonRoutes");
const connectDB = require("./db");

const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use("/api", pokemonRoutes);

// Banco
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escutando a porta ${PORT}`);
});