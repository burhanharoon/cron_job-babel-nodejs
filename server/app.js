import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import nodeCron from "node-cron";
import scheduledTask from "./cronTask";

var app = express();
require("dotenv").config();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);

nodeCron.schedule(
  "0 0 5 * * *",
  async () => {
    console.log(await scheduledTask());
  },
  { timezone: "US/Eastern" }
);

export default app;
