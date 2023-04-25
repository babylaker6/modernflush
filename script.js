import "dotenv/config";
import { connect } from "@planetscale/database";

async function getUsers() {
  const config = {
    host: "aws.connect.psdb.cloud",
    username: "afvchs27qyfje5qvqd95",
    password: "pscale_pw_8bb4Azp1B2iNbvHKMkjVGNlVYYqnjBEcNWMa1MJCF5o",
  };

  const conn = await connect(config);

  const results = await conn.execute("SELECT * FROM users");
  console.log("test cl");
  console.log(results);
}

getUsers();
