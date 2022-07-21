const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db", // or ':memory:'
});

module.exports = sequelize;
