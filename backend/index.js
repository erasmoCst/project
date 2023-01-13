const express = require("express");
const app = express();

const morgan = require("morgan");

const products = require("./routes/products");
const users = require("./routes/users");
const login = require("./routes/login");
const connection = require("./models");

const cors = require("cors");

const port = 3001;//Define a porta para rodar a aplicacao

app.use(express.json());//Utiliza o modulo de conversão (do express) para Json //USAR ANTES DA ROTA!!  
app.use(morgan("dev"));
app.use(cors());
/* app.use(verifyToken); */
app.use("/login", login);
app.use("/products", products);
app.use("/users", users);

app.listen(port,() => {//Faz com que a aplicação fique aberta, na porta 'port'
  console.log(`App running at port ${port}!`);//DEBUG - Saber que a aplicacao esta rodando e em qual porta
});