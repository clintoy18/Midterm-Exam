const { Sequelize } = require("sequelize");
const mysql = require('mysql2/promise');

// connect to db and initialize
const sequelize = new Sequelize("database_name", "username", "password", {
    host: "localhost",
    dialect: "mysql"
});

// Test the connection
sequelize.authenticate()
    .then(() => console.log("Database connected successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
