const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const colors = require("colors");

router.get("/getPriceBtcAndEth", async (req, res, next) => {
  async function loader1() {
    const requestBtc = await fetch("http://btc-service:4000/api/v1/btc");
    const resultBtc = await requestBtc.json();
    return resultBtc;
  }

  async function loader2() {
    const requestEth = await fetch("http://eth-service:5000/api/v1/eth");
    const resultEth = await requestEth.json();
    return resultEth;
  }

  try {
    const result = await Promise.all([loader1(), loader2()]);
    res.status(200).send({
      results: result,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
});

module.exports = router;
