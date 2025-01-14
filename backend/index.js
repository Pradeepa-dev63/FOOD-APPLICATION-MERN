import express from "express" 
import foodRouter from "./routes/foodRoute.js"
import UserRouter from "./routes/UserRouter.js"
import cors from 'cors'
import connectedDB from "./data_base/db.js"
import dotenv from 'dotenv'
dotenv.config()

//=> app config
const app = express()

//=> middleware  
app.use(cors())

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));


//-------------------------//
app.get("/" ,(req,res)=>{ 
   res.send('API WORKING - (FOOD APP) ') 
})
//-------------------------//

//=> api endpoint
app.use ("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use('/api/user' , UserRouter)


//-------------------------------------------------//

// DB connection 
connectedDB()

// Start the server 
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
 console.log(`server running at http://localhost:${PORT}`) 
})
