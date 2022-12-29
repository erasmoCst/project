//Metodo de inicalizacao EXPRESS de acordo com a documentacao
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3001;//Define a porta para rodar a aplicacao

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

//Routes
const connection = require("./models");
const product = require("./routes/product");

app.use(express.json());//Utiliza o modulo de conversão (do express) para Json //USAR ANTES DA ROTA!!  
app.use(morgan("dev"));
app.use("/product", product);

app.listen(port,() => {//Faz com que a aplicação fique aberta, na porta 'port'
    console.log(`App running at port ${port}!`);//DEBUG - Saber que a aplicacao esta rodando e em qual porta
});