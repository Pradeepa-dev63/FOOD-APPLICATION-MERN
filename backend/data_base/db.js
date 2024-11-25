import mongoose from 'mongoose'


const connectedDB = async()=>{
    try{
        const con = await mongoose.connect ("mongodb+srv://pradeepa:puthlipradeepa@cluster0.sxi2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('DB connected successfully')
    }catch (err){
       console.log('DB connection error')
    }
}

export default connectedDB
