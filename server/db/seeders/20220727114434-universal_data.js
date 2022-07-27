module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "universal_data",
      [
        {
          title: "Micheal Dewar",
          start_date: new Date(),
          move_status: "Booked",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seth Moriarty",
          start_date: new Date("2022-09-22"),
          move_status: "Booked",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Daisy Fu",
          start_date: new Date("2022-09-28"),
          move_status: "Booked",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Test",
          start_date: new Date("2022-07-28"),
          move_status: "Booked",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("universal_data", null, {});
  },
};
