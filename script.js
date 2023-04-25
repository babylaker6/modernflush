import "dotenv/config";
import { connect } from "@planetscale/database";

async function getUsers() {
  const config = {
    host: "aws.connect.psdb.cloud",
    username: "djawdrp6tdsrq67e7n47",
    password: "pscale_pw_MMlRZXTuNGZqhwG34qBl0RZtjhTsH2hYBHzSnNSq7TW",
  };

  const conn = await connect(config);

  const results = await conn.execute("SELECT * FROM users");
  console.log("test cl");
  console.log(results);
}

getUsers();
