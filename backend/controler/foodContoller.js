import foodModel from "../model/foodModel.js";
import fs from 'fs'

//----- (( POST )) -----//
//add food item 
const addFood = async (req,res)=>{
  let image_filename = `${req.filename}`;
 const food = new foodModel ({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename,
  })
  try{
    await food.save();
    res.json({success:true,message:"Food added successfully...!"})
  } catch(error){
   console.log(error)
   res.json({success:false , message:"Error"})
  }
}

//--------------------------------------------------------------------------------------------//
// ------- ( GET ) ----- //

const listFood = async(req,res)=>{
  try{
   const foods = await foodModel.find({})
   res.json ({success:true,data:foods})
  }catch(error){
    console.log('error in food get method')
    res.json({success:false , message : 'error in food get method'})
  }
}


//--------------------------------------------------------------------------------------------//
//----- ( PUT ) --------//

// const editFood = async(req,res)=>{
//   try{
//    const foods = await foodModel.findByIdAndUpdate({})
//   }catch(error){
//     console.log('error in food edit method')
//     res.json({success:false , message : 'edit food error'})
//   }
// }

//  const update = (req,res)=>{
//   if(!req.body){
//    return res
//    .status (400)
//    .send({message: err.message || ' Data to update can not be empty'})
//   }
//   const id= req.params.id;
//   Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
//   .then(data=>{
//    if(!data){
//        res.status(404).send({ message: `Cannot Update user with ${id}. May be use not found!`})
//    }else {
//        res.send(data)
//    }
//   })
//   .catch(err=>{
//    res.status(500).send ({ msg: 'Error update information'})
//   })
// }

//---------------------------------------------------------------------------------------------//
// ----- (( DELETE )) ----- // 
// remove food item 

const removeFood = async (req,res) =>{
  try{
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/ ${food.image}` , ()=>{})

      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true , message: "Food removed successfully..!"})
  }catch (error){
     console.log(' error in food removing')
     res.json ({success:false , message: "failed to food removed "})
  }
}

//---------------------------------------------------------------------------------------------//

export {addFood ,listFood, removeFood }




