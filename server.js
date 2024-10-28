const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()

const port = 3000;
// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.json({ extended: false }))

// Route that receives a POST request to /update
app.post('/update', function (req, res) {
    const body = req.body.Body
    console.log(req.body)
    res.status(200).send('OK')
})

// Tell our app to listen on port 3000
app.listen(port, function (err) {
    if (err) {
        throw err
    }

    console.log(`Server started on port ${port}`)
})