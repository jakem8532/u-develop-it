const express = require('express')
const inputCheck = require('./utils/inputCheck')
const db = require('./db/connection')
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001
const app = express()


// Express Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', apiRoutes)


// default response for other requests (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

db.connect(err => {
    if (err) throw err

    console.log('Database connected!')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})