console.log("test1");
require("dotenv").config();
console.log("test2");
const mysql = require("mysql2");
console.log("test3");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();
