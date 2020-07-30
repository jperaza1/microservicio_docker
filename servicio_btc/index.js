const express = require("express");
const bodyParser = require("body-parser");

const PORT = 4000; //puerto donde corre el server

const app = express();

const adminRoutes = require("./routes/btc.js"); //Importamos nuestro ruta donde hacemos la llamada a la API de bitso

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", adminRoutes); //Ruta por la que vamos a acceder a nuestro servicio

app.listen(PORT, () => {
  console.log("Service is running " + PORT);
}); //Correr nuestro server en el puerto que indicamos en la variable PORT
