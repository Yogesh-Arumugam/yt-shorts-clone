const express = require("express");
const router = express.Router();

const vidRouter = require("./video");

router.get("/", (req, res) => {
  res.send("Youtube basic functionality by Code by yogesh");
});

router.use("/video", vidRouter);

module.exports = router;