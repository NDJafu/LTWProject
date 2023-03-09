const express = require("express")
const app = express()
const connectDB = require("./db/connet.db")
require("dotenv").config()
const route = require("./route/common.route")

route(app)

app.use(express.json())



const port = process.env.PORT || 8060

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening in port ${port}...`))
    } catch (error) {
        console.log(error.message)
    }
}

start()