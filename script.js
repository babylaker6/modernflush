// import "/node_modules/dotenv/config";
// import { connect } from "@planetscale/database";

// const config = {
//   host: aws.connect.psdb.cloud,
//   username: rg5rw4dmf3buezajhwid,
//   password: pscale_pw_OA1d9AUflejqC5cAOxRgCa1RkRPwDl3db7dDkQEzpnn,
// };

const url = `/.netlify/functions/getAllUsers`;
try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
}

// if (module.hot) {
//   module.hot.accept();
// }
