import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please add the product name"],
    },
    price: {
        type:String,
        required: [true, "Please add the product price"],
    },
    bio: {
        type:String,
        required: [true, "Please add the product bio"],
    },
    image: {
        type:String,
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('Product',productSchema);