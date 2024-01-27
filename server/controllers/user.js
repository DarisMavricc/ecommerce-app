import mongoose from "mongoose"
import User from '../models/UserModel.js'

export const getUser = async(req,res) => {
    const {email} = req.body;
    const userInfo = await User.findOne({email});
    console.log(userInfo);
}