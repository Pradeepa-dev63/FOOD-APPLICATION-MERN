import express from "express" 
import connectedDB from "./data_base/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()

// middleware  
app.use(express.json())

//-------------------------//
app.get("/" ,(req,res)=>{ 
   res.send('API WORKING')
})
//-------------------------//

// api endpoint
app.use ("/api/food", foodRouter)
app.use("/images", express.static('uploads'))


// db connect 
connectedDB()
app.listen(8000, ()=>{
 console.log(`server running at http://localhost:8000`)
})
