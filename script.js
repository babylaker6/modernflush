// import "/node_modules/dotenv/config";
import { connect } from "/node_modules/planetscale/database/dist/index";
const config = {
  host: aws.connect.psdb.cloud,
  username: coxbrs0khabpvnfyppgl,
  password: pscale_pw_JWNQQUwkHCRtMWIgB2M7tlpky1C6dagJNLr4TCBl901,
};
const conn = connect(config);
const results = await conn.execute("SELECT * FROM users");
console.log(results);
