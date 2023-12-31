const express = require("express");
const port = process.env.PORT || 5000
const app = express()



//API
app.get("/", (req, res) => {
    res.send("I am a backend server")
})

app.listen(port, (err) => {
    if(err){
        console.log(`ERROR: ${err.message}`)
    } else {
        console.log(`Listening on port ${port}`)
    }
})