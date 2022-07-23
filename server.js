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

// default response for other requests (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})