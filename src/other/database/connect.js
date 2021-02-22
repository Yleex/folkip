const mysql = require("mysql");
const { log, error } = require("../utils/xconsole")
const connection = mysql.createConnection(require("./config"));

module.exports.connect = function () {
  connection.connect(function (err) {
    if (err) {
      error(err.stack);
    }

    log("Database connected");
  });
}

module.exports.disconnect = function () {
  connection.end(function () {
    log("Base de datos cerrada");
  });
}

/* // ejemplo de query.
connection.query($query, function (err, rows, fields) {
  if (err) {
    error("database", "Error al ejecutar " + $query);
    console.log(err);
    return;
  }

  log("Query ejecutada con exito " + rows);
});
*/

module.exports.connection = connection;
