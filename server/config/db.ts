import mongoose from "mongoose"

const DB_URI = "mongodb://0.0.0.0:27017/CWM"

const dbConfig = async() =>{
    try {
        const connect = await mongoose.connect(DB_URI)
        console.log(`databse is connected to ${connect.connection.host}`)
    } catch (error) {
        console.log(`unable to connect to database ${error}`)
    }
}

export default dbConfig 