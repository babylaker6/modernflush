import "dotenv/config";
import { connect } from "@planetscale/database";

async function getUsers() {
  const config = {
    host: "aws.connect.psdb.cloud",
    username: "tnz4w42hd6ve6h7uxr6g",
    password: "pscale_pw_3q9rUVLijQInGUKR07N1JCJkQVbn4fsA8OXaNJe6XRJ",
  };

  const conn = await connect(config);

  const results = await conn.execute("SELECT * FROM users");
  console.log("test cl");
  console.log(results);
}

getUsers();
