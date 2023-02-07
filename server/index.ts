import express, { Application } from "express"
import appConfig from "./app"
import dbConfig from "./config/db"

const PORT : number = 8000

const app : Application = express()
appConfig(app)
dbConfig()

app.listen(PORT , () =>{
    console.log(`server is up on port ${PORT}`)
})