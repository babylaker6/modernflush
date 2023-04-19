import { connect } from "index";

const config = {
  host: "aws.connect.psdb.cloud",
  username: "jbcd1hq5v5mdf6eur741",
  password:
    "DATABASE_PASSWORD=pscale_pw_W2rExiPF6xzbwiMdtw3rvQLF3sfnhZJqQ5zkcU68iBr",
};

async function getUsers() {
  const conn = connect(config);

  const results = await conn.execute("SELECT * FROM users");
  return results;
}

console.log(getUsers());
