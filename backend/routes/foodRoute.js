import express from 'express'
import { addFood ,listFood  , removeFood} from '../controller/foodContoller.js'
import multer from 'multer'
const foodRouter = express.Router() 


// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});

const upload = multer({ storage });

   
foodRouter.post ('/add' , upload.single('image'),addFood)
foodRouter.get ('/list' , listFood)
//foodRouter.put ( '/edit/:id' , editFood ) 
foodRouter.delete ('/remove/:id' , removeFood)


export default foodRouter ; 
