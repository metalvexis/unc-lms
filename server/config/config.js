/* eslint-disable no-undef */
// console.log("NODE_ENV", process.env.NODE_ENV);

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "obecqi",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
  docker: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "obecqi",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "obecqi_test",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "obecqi",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
