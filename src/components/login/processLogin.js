import { createConnection } from "mysql";

var connection = createConnection({
  host: "localhost",
  user: "admin",
  password: "12345678",
  database: "my_db"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
