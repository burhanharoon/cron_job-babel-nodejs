require("dotenv").config();

const development = {
  database: "Inventory_App",
  dialect: "postgres",
  host: "127.0.0.1",
};
const production = {
  database: "Inventory_App",
  dialect: "postgres",
  host: "127.0.0.1",
};

module.exports = {
  development,
  production,
};
