import { sequelize } from "./app/models";
import axios from "axios";

const config = {
  headers: {
    Authorization: "Bearer S.1__8dc6b9dee7187093baff5c555e8e681088c4864",
  },
};

const scheduledTask = async () => {
  const queryParentId = await sequelize.query(
    `SELECT start_date FROM Inventory_App.universal_data WHERE move_status = "Booked" AND start_date = CURDATE() + 1 GROUP BY start_date;`
  );
  // Checking if found any rows
  if (queryParentId[1].rows.length > 0) {
    const data = {
      name: queryParentId[1].rows[0].start_date,
      short_code: "",
      billable: "no",
      assigned_to_all: "yes",
      billable_rate: "",
    };
    // Calling the api to get parent_id
    const jobCodesApiData = await axios.post(
      " https://rest.tsheets.com/api/v1/jobcodes",
      {
        data,
      },
      config
    );
    const parent_id = jobCodesApiData?.results?.jobcodes?.id;
    // Querying the database to get all the titles
    const queryTitle = await sequelize.query(
      `SELECT title FROM Inventory_App.universal_data WHERE move_status = "Booked" and start_date = CURDATE() + 1;`
    );
    let payloadData = [];
    queryTitle[1].rows.forEach((row) => {
      const temp = {
        name: row.title,
        parent_id,
        short_code: "",
        billable: "no",
        assigned_to_all: "yes",
        billable_rate: "",
      };
      payloadData.push(temp);
    });
    // Sending request with the parent_id and names
    const apiData = await axios.post(
      " https://rest.tsheets.com/api/v1/jobcodes",
      {
        data: payloadData,
      },
      config
    );
    return apiData;
  } else {
    return "No data found";
  }
};

export default scheduledTask;
