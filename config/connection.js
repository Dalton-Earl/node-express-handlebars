var mysql = require("mysql");
var username = process.env.mySQL_username;
var password = process.env.mySQL_password;


var connection; 

if(process.env.JAWSDB_URL){
  console.log("you do it?");
  connection = mysql.createConnection({
    host: 'jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: "dpi495wfqxyyym9i",
  password: "alxcq3t2zqlj15ti",
  database: 'x06zwce3z0ro75w1'
}

  );
}else {
  console.log("not quite!")
  connection = mysql.createConnection({
    host: 'localhost',
    user: username,
    password: password,
    database: 'burgers_db'
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;