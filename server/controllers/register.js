import mongoose from "mongoose"
import User from '../models/UserModel.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const regUser = async(req,res) => {
    const {fname,lname,email,password} = req.body;
    if(!password || !fname || !lname || !email) {
        return res.status(400).json('You should fill all the fields') 
    } 
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        return res.status(400).json('User already registered!');
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        fname,
        lname,
        email,
        password: hashedPassword
    })


    if(user){
        const data = {
            first_name: user.fname,
            last_name: user.lname,
            email: user.email
        }
        const token = jwt.sign({ id: user._id }, "secretkey");
        res.cookie("accessToken", token);
        res.status(200).json(data);
    } else {
        return res.status(400).json('User data is not valid');
    }
    
}