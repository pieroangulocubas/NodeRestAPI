import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import http from 'http'
import mongoose from 'mongoose'


const app=express()

app.use(cors({credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.use(compression())

const server=http.createServer(app)

server.listen(8080,()=>{
    console.log("Server on port 8080")
})


const MONGO_URL="mongodb+srv://piero:piero@cluster0.gsi7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URL)
mongoose.connection.on('connected', () => console.log('DB connected'))
mongoose.connection.on('error', (err:Error) => console.log(err));