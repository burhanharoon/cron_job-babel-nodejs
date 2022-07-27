import express from "express";
// import { universal_data } from "../app/models";
// const {sequelize}= require("sequelize");
import { sequelize } from "../app/models";
import axios from "axios";

var router = express.Router();

const config = {
  headers: {
    Authorization: "Bearer S.1__8dc6b9dee7187093baff5c555e8e681088c4864",
  },
};

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const queryParentId = await sequelize.query(
    "SELECT start_date FROM universal_data WHERE move_status = 'Booked' AND start_date = cast(now() as date)+1 group by start_date;"
  );
  const data = {
    name: queryParentId[1].rows[0].start_date,
    short_code: "",
    billable: "no",
    assigned_to_all: "yes",
    billable_rate: "",
  };
  // const jobcodesApiData = await axios.post(
  //   " https://rest.tsheets.com/api/v1/jobcodes",
  //   {
  //     data,
  //   },
  //   config
  // );
  // const parent_id = jobcodesApiData?.results?.jobcodes?.id || 00;
  const parent_id = 10;
  // SELECT title FROM Inventory_App.universal_data WHERE move_status = Booked and start_date = CURDATE() + 1;
  const queryTitle = await sequelize.query(
    "SELECT title FROM universal_data WHERE move_status = 'Booked' and start_date = cast(now() as date)+1;"
  );
  const payloadData = [];
  queryTitle[1].rows.forEach((row) => {
    const temp = {
      name: row.title, //here please use title from query result above
      parent_id,
      short_code: "",
      billable: "no",
      assigned_to_all: "yes",
      billable_rate: "",
    };
    payloadData.push(temp);
  });
  // const apiData = await axios.post(
  //   " https://rest.tsheets.com/api/v1/jobcodes",
  //   {
  //     data: payloadData,
  //   },
  //   config
  // );
  res.json({ data: payloadData });
});

export default router;
