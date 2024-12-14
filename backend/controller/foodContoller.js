import foodModel from "../model/foodModel.js";
import fs from 'fs'
import path from 'path'


//----- (( POST )) -----//

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
    res.status(200).json({success:true,message:"Food added successfully...!"})
  } catch(error){
   console.log(error)
   res.status(400).json({success:false , message:"Error"})
  }
}

//------------------------------------------------------------//

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

//--------------------------------------------------------//

// ------- ( PUT )

// const editFood = async (req,res)=>{

//   try {
//     const itemId = req.params.id;
//     const { name, description, removeImage } = req.body;
//     const newImagePath = req.file ? req.file.path : null; // If using multer for image uploads

//     // Find the item by ID
//     const item = await foodModel.findById(itemId);
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // Delete the old image if requested or replacing with a new one
//     if (removeImage || newImagePath) {
//       if (item.imagePath) {
//         const imagePath = path.join(__dirname, item.imagePath); // Adjust path if necessary
//         fs.unlink(imagePath, (err) => {
//           if (err) console.error('Error deleting old image:', err);
//         });
//       }
//     }

//     // Update item details
//     item.name = name || item.name;
//     item.description = description || item.description;

//     // Update the image path if a new image was uploaded
//     if (newImagePath) {
//       item.imagePath = newImagePath;
//     } else if (removeImage) {
//       item.imagePath = null; // Remove the image
//     }

//     // Save the updated item
//     await item.save();

//     res.status(200).json({ message: 'Item updated successfully', item });
//   } catch (error) {
//     console.error('Error updating item:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// } 

//--------------------------------------------------------//

// ----- (( DELETE )) ----- // 

const removeFood = async(req,res)=>{
   try {
   const itemId = req.params.id;

    // Find the item by ID
    const item = await foodModel.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // If the item has an associated image, delete the image file
    if (item.imagePath) {
      const imagePath = path.join(__dirname, item.imagePath); // Adjust the path if necessary
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image:', err);
        }
      });
    }

    // Delete the item from the database
    await foodModel.findByIdAndDelete(itemId);
   res.status(200).json({ message: 'Food Item deleted successfully' });

  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// const removeFood = async(req,res)=>{
//   try {
//     const food = await foodModel.findById(req.body.id);
//     fs.unlink (`uploads/${food.image}`, ()=>{} )

//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({success:true , message : 'Food removed successfully '})
//   } catch (error){
//     console.log(error);
//     res.json ({success:false , message:'Error' })
//   }
// }
   

//---------------------------------------------------------//


export { addFood ,listFood , removeFood }




