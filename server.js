const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("./db")

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

//Connecting the Database
connectDB();

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})