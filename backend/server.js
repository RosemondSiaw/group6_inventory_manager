import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import itemRoutes from './routes/items.js'
import staffRoutes from './routes/staffs.js'

dotenv.config()

// express app

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/items', itemRoutes)
app.use('/api/staffs', staffRoutes)

// connect to database
mongoose.connect(process.env.GEIA_INV_DB_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })