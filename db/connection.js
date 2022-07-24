const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MYSQL password
        password: 'charlotte',
        database: 'election'
    }
)

module.exports = db