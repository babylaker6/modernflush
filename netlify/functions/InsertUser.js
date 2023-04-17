"use strict";

import { connect } from "@planetscale/database";

const config = {
  host: "aws.connect.psdb.cloud",
  username: "x0fn9kyj8omn413bjuz9",
  password: "pscale_pw_SQZkm4r1Agcs3P9ik4uRu5uaMxZpOnr59rVAKTAXnO8",
};

const conn = connect(config);
const results = await conn.execute("SHOW TABLES");
console.log(results);
