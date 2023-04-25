import "dotenv/config";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};
const conn = connect(config);

exports.handler = async function (event, context) {
  const results = await conn.execute("select * from users");
};
