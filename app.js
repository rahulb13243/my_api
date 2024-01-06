import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import userRoutes from './routes/userRoutes.js'
import webRoutes from './routes/webRoutes.js'
import mysqlDB from './config/mysqlDB.js'

dotenv.config()
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//CORS POLICY
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)
// mysqlDB()

// JSON
app.use(express.json())

// Load Routes API
app.use("/api/user", userRoutes)

// Load Routes WEB
// app.use("/web/user", webRoutes)

// app.use("/api/admin" , userRoutes)

//SERVER LISTENING
app.listen(port, (req,res)=>{
    console.log(`Server listening at http://localhost:${port}`)
})