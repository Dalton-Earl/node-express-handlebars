var mysql = require("mysql");
var username = process.env.mySQL_username;
var password = process.env.mySQL_password;


var connection; 

if(process.env.JAWSDB_URL){
  console.log("you do it?");
  connection = mysql.createConnection({
    host: 'nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: "imzil0wti1pz4lod",
  password: "siuzoice5fn77nha",
  database: 'egdxrj99k9nul3i8'
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