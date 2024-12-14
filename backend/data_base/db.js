import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectedDB = async()=>{
    try{
        const con = await mongoose.connect (process.env.MONGOOSE_URL)
        console.log('DB connected successfully..!')
    }catch (err){
       console.log('DB connection error')
    }
}

export default connectedDB
