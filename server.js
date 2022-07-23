const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001
const app = express()


// Express Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MYSQL password
        password: 'charlotte',
        database: 'election'
    },

    console.log('Connected to the election database')
)

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows)
// })

// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(row)
// })

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(result)
// })

const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`
const params = [1, 'Ronald', 'Firbank', 1]

db.query(sql, params, (err, results) => {
    if (err) {
        console.log(err)
    }

    console.log(results)
})

// default response for other requests (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})