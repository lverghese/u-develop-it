const mysql = require('mysql2');
//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //SQL username,
        user: 'root',
        //SQL Password,
        password: 'Cena2022!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;