
  
//   module.exports = dbConn;

import mysql from 'mysql'
// const mysql = require('mysql')

const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'aios',
    port     : '3306'
  });

  
  const mysqlDB = async() => {
    dbConn.connect(function(err) {
        if (err) throw err;
        console.log("MYSql Connected Successfully!");
      });
  }
  
  export default mysqlDB