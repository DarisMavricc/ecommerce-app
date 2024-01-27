import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fname: {
        type:String,
        required: [true, "Please add the user name"],
    },
    lname: {
        type:String,
        required: [true, "Please add the user name"],
    },
    email: {
        type:String,
        required: [true,"Please add the user email address"],
        unique: [true,"Email address already taken"],
    },
    password: {
        type:String,
        required:[true,"Please add the user password"],
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('User',userSchema);