console.log("test cl");
import {} from "dotenv/config";
console.log("test cl2");
const mysql = require("mysql2");
console.log("test cl");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end();

// async function getUsersTable() {
//   const url = `/.netlify/functions/getAllUsers`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("error");
//   }
// }

// getUsersTable();
