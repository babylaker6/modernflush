"use strict";

import { connect } from "@planetscale/database";

const config = {
  host: "aws.connect.psdb.cloud",
  username: "jbcd1hq5v5mdf6eur741",
  password: "pscale_pw_W2rExiPF6xzbwiMdtw3rvQLF3sfnhZJqQ5zkcU68iBr",
};

const conn = await connect(config);
const results = await conn.execute("SELECT * FROM users");
console.log(results);
