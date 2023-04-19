import "/node_modules/dotenv/config";
import { connect } from "/node_modules/planetscale/database/index";
const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};
const conn = connect(config);
const results = await conn.execute("SELECT * FROM users");
console.log(results);
