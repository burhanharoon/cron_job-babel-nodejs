import express from "express";

var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.json("Users");
});

export default router;
