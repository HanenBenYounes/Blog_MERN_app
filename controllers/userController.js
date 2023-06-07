const userModel= require('../models/userModel')
const bcrypt = require ('bcrypt')
//create user register user
exports.registerController = async(req,res) =>{
    try{
        const {username, email, password} = req.body
        //validation
        if(!username ||!email ||!password){
            return res.status(400).send({
                sucess:false,
                message:'Please Fill all fields',
            });
        }
        //existing user
        const existingUser = await userModel.findOne({email})
        if (existingUser){
            return res.status(401).send({
                sucess:false,
                message:' user already exists',
            });
        }
      const hashedPassword = await bcrypt.hash(password, 10);
    


        //save new user
        const user = new userModel({username, email, password:hashedPassword});
        await user.save();
        return res.status(201).send({
            sucess:true,
            message: "New User Created",
            user,
        });
    }catch(error){
        console.log (error)
        return res.status(500).send({
            message:'Error In Register callback',
            success:false,
            error,
        })
    }

};




//get all users
exports.getAllUsers =async (req, res)=>{
    try{
        const users = await userModel.find({})
        return res.status(200).send({
         userCount: users.length,
         success:true,
         message:" all users data",
         users,
        })
     }catch(error){
         console.log (error)
         return res.status(500).send({
             success:false,
             message:'Error In Get All Users',
             error
         })
     }
}


//login
exports.loginController = () =>{};