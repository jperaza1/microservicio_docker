const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const colors = require("colors");

router.get("/btc", async (req, res, next) => {
  const urlBtcInfo = "https://api.bitso.com/v3/ticker/?book=btc_usd"; //Url de la API de bitso para consulta de precio de btc

  try {
    const request = await fetch(urlBtcInfo); //Request hacia la ruta de bitso
    const result = await request.json(); // Convertir en formato json la respuesta de nuestro request

    console.log("BTC last: ", result.payload.last.rainbow);
    res.status(200).send(result); //Mandar al cliente los resultados
  } catch (error) {
    res.status(400).send(error); // En caso de haya fallado mandar un 400 y la info de error
  }
});

module.exports = router;
