var mysql = require('mysql');

var connection = mysql.createConnection({
    host :'localhost',
    user :'root',
    password :'root',
    database : 'Examen_janvier_2022'
});

connection.connect(function(error) { if (error) console.log(error);});

module.exports = connection;