import "dotenv/config";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};
const conn = connect(config);

async function selectAllUsers() {
  const results = await conn.execute("select * from users");
}

selectAllUsers();
