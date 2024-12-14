import userModel from '../model/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import dotenv from 'dotenv'
import { response } from 'express'
dotenv.config()

//=> log in user
const loginUser = async (req,res)=>{
const { email,password } = req.body ;
try {
  const user = await userModel.findOne({email})

  if(!user){
    return res.json({success:false ,  message : " user Doesn't exist "})
  }

  const isMatch = await bcrypt.compare(password,user.password) 

  if(!isMatch){
    return res.json({success:false ,  message : "Invalid credentials" })
  }

  const token = createToken(user._id);
  res.json({success:true , token})

} catch (error) {
  console.log(error)
  res.json({success:false ,  message : "Error" })
}
}


//=> create token 
const createToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET )
}


//=> register User 
const registerUser = async (req,res)=>{

  const { name,password,email } = req.body || {};

  // if (!name || !password || !email) {
  //   return res.status(400).json({ message: 'All fields are required' });
  // } 
  // res.status(201).json({ message: 'User registered successfully!' });



  try {
    const exists = await userModel.findOne({email});
    if(exists){
      return res.json({success:false ,  message : " user already exists" })
    }

    //  email validation 
    if(!validator.isEmail(email)){
      return res.json({success:false ,  message : " please enter valid email" })
    }

    // strong password
    if(password.length<8){
      return res.json({success:false ,  message : " please enter strong password" })
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const newUser = new userModel({
      name:name,
      email:email,
      password:hashedPassword
    })

    const user =  await newUser.save()
    const token = createToken(user._id)
    res.json ({success:true,token})

  } catch (error) {
    console.log(error)
    res.json({success:false , message : " Error" })


  }
}

 export {loginUser, registerUser}