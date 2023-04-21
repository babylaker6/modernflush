// import "/node_modules/dotenv/config";
import { connect } from "@planetscaledatabase";

const config = {
  host: aws.connect.psdb.cloud,
  username: rg5rw4dmf3buezajhwid,
  password: pscale_pw_OA1d9AUflejqC5cAOxRgCa1RkRPwDl3db7dDkQEzpnn,
};

async function getUsers() {
  const conn = connect(config);
  const results = await conn.execute("SELECT * FROM users");
  console.log(results);
}

getUsers();

if (module.hot) {
  module.hot.accept();
}
