import mongoose from "mongoose"
import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const logUser = async(req,res) => {
    const {email,password} = req.body;
    if(!email || !password) {
        return res.status(400).json('All fields are mandatory')
    } 
    const user = await User.findOne({email})
    if(user) {
        const checkPassword = bcrypt.compare(
            req.body.password,
            user.password
        );
        if(checkPassword) {

            const data = {
                first_name: user.fname,
                last_name: user.lname,
                email: user.email
            }
            const token = jwt.sign({ id: user._id }, "secretkey");
            res.cookie("accessToken", token);
            res.status(200).json(data);
            

        } else {
            return res.status(400).json('Incorrect password')
        }
    } else {
        return res.status(400).json('User does not exist!');
    }
}