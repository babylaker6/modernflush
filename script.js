console.log("test cl");
import {} from "dotenv/config";
// import {} from "mysql2/promise";
console.log("test cl2");
const mysql = import("mysql2");
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
